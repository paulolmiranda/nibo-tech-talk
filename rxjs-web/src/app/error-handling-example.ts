import {
  Subject,
  iif,
  of,
  tap,
  retry,
  range,
  forkJoin,
  switchMap,
  throwError,
  catchError,
  interval,
  timer,
} from 'rxjs';

export class ErrorHandlingExample {
  public catch(): void {
    throwError(() => 'Erro no serviço!')
      .pipe(catchError((value: string) => throwError(() => `Ops: ${value}`)))
      .subscribe({
        next: (val) => console.log('Next', val),
        error: (val) => console.log('Error', val),
      });

    of(6)
      .pipe(
        switchMap((value: number) =>
          iif(
            () => value <= 5,
            of(value),
            throwError(() => value)
          )
        ),
        catchError((value: number) => of(value))
      )
      .subscribe({
        next: (value: number) => console.log('next', value),
        error: (value: number) => console.log('error', value),
        complete: () => console.log('complete'),
      })
      .add(() => console.log('add'));
  }

  public retry(): void {
    forkJoin({
      a: of(1).pipe(tap(() => console.log('A'))),
      b: of(2).pipe(tap(() => console.log('B'))),
      c: of(3).pipe(tap(() => console.log('C'))),
      d: throwError(() => 'bug!!!'),
    })
      .pipe(
        catchError((error: string) => {
          console.log('retry forkJoin', error);
          return throwError(() => error);
        }),
        retry(3)
      )
      .subscribe((data: any) => {
        console.log('data', data);
      });

    range(0, 10)
      .pipe(
        switchMap((value: number) =>
          iif(
            () => value <= 5,
            of(value),
            throwError(() => value)
          )
        ),
        retry(3)
      )
      .subscribe({
        next: (value: number) => console.log('next', value),
        error: (value: number) => console.log('error', value),
        complete: () => console.log('complete'),
      })
      .add(() => console.log('add'));

    const subject$ = new Subject<number>();

    subject$
      .pipe(
        switchMap((value: number) =>
          iif(
            () => value <= 2,
            throwError(() => value),
            of(value)
          )
        ),
        retry(3)
      )
      .subscribe({
        next: (value: number) => console.log('subject$', value),
      });

    range(0, 100).subscribe((value: number) => subject$.next(value));
  }

  public retryWhen(): void {
    interval(1000)
      .pipe(
        switchMap((value: number) =>
          iif(
            () => value === 5,
            throwError(() => 'Error'),
            of(value)
          )
        ),
        retry({
          delay: (error: any, retryCount: number) => {
            console.log('timer', retryCount, 1000 * retryCount, new Date());
            return timer(1000 * retryCount);
          },
          resetOnSuccess: false,
        })
        //retryWhen((error: Observable<any>) => error.pipe(tap((error: any) => console.log('tap', error)), delay(10000)))
      )
      .subscribe({
        next: (value: number) => {
          console.log(value);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }
}
