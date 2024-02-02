import { defaultIfEmpty, every, forkJoin, iif, interval, of, sequenceEqual, switchMap, tap } from 'rxjs';

export class ConditionalExample {
  public iif(): void {
    const trueResult$ = of('P');
    const falseResult$ = of('I');

    interval(2000)
      .pipe(
        switchMap((count: number) =>
          iif(() => count % 2 === 0, trueResult$, falseResult$)
        )
      )
      .subscribe((value: string) => {
        console.log(value);
      });
  }

  public defaultIfEmpty(): void {
    const source = {
      a: of(1).pipe(defaultIfEmpty(0)),
      b: of().pipe(defaultIfEmpty(0)),
      c: of(3).pipe(defaultIfEmpty(0)),
      d: of().pipe(defaultIfEmpty(0)),
    };

    forkJoin(source).subscribe({
      next: (data: any) => {
        console.log('forkJoin next', data);
      },
      complete: () => {
        console.log('forkJoin complete');
      },
    });

    interval(2000)
      .pipe(
        tap((count: number) => console.log(`=> tap: ${count}`)),
        switchMap((count: number) =>
          iif(() => count % 2 === 0, of(count), of()).pipe(defaultIfEmpty(0))
        )
      )
      .subscribe((count: number) => {
        console.log('interval next', count);
      });
  }

  public every(): void {
    const source$ = of(2, 4, 6, 8, 9, 10);

    source$
      .pipe(every((value: number) => value % 2 === 0))
      .subscribe((checked: boolean) => {
        console.log(`only pair numbers: ${checked}`);
      });
  }

  public sequenceEqual(): void {
    of('Paulo', 'Dentinho', 'Mônica')
      .pipe(
        switchMap((name: string) =>
          of(name).pipe(sequenceEqual(of('Dentinho')))
        )
      )
      .subscribe((checked: boolean) => {
        console.log('checked', checked);
      });
  }
}
