import {
  iif,
  delay,
  throwError,
  delayWhen,
  fromEvent,
  interval,
  map,
  switchMap,
  mergeMap,
  of,
  takeUntil,
  tap,
  repeat,
  take,
  finalize,
  forkJoin,
  Subject,
  lastValueFrom,
  Observable,
  Subscriber,
} from 'rxjs';

export class UtilityExample {
  public tap(): void {
    interval(1000)
      .pipe(
        tap((val: number) => console.log(`[tap] inicial ${val}`)),
        map((val: number) => val * 10),
        /*
        switchMap((val: number) =>
          iif(
            () => val > 200,
            throwError(() => 0),
            of(val)
          )
        ),
        */
        tap((val: number) => console.log(`[tap] final ${val}`))
      )
      .subscribe({
        next: (val: number) => {
          console.log('Valor', val);
        },
        error: () => console.log('error!'),
      });
  }

  public delay(): void {
    const mousedown$ = fromEvent(document, 'mousedown');
    const mouseup$ = fromEvent(document, 'mouseup');

    mousedown$
      .pipe(
        mergeMap((event: any) => {
          console.log('mousedown -> mergeMap', event);
          return of(event).pipe(delay(500), takeUntil(mouseup$));
        })
      )
      .subscribe((event: any) => console.log('Long Press!', event));

    /*
    const startAt = new Date().getTime();

    timer(5000, 1000)
      .pipe(
        delay(5000),
        tap((count: number) => {
          console.log('start', count);
        }),
        switchMap((count: number) => of(count).pipe(delay(500))),
        tap((count: number) => {
          console.log('end', count);
        }),
      )
      .subscribe({
        next: (count: number) => {
          const currentAt = new Date().getTime();
          console.log('count', count, currentAt - startAt);
        },
      });*/
  }

  public delayWhen(): void {
    const startAt = new Date().getTime();

    interval(1000)
      .pipe(
        delayWhen(() => {
          const period = Math.random() * 5000;
          console.log('period', period);
          return interval(period);
        })
      )
      .subscribe((count: number) => {
        const currentAt = new Date().getTime();
        console.log('count at', currentAt - startAt);
        console.log('count', count);
      });
  }

  public repeat(): void {
    of('Ola')
      .pipe(repeat({ count: 5, delay: 3000 }))
      .subscribe((data: string) => {
        console.log('data', data);
      });
  }

  public finalize(): void {
    forkJoin({
      a: of('a'),
      b: of('b'),
      c: of('c').pipe(switchMap(() => throwError(() => 'Error!'))),
    })
      .pipe(finalize(() => console.log('finalize')))
      .subscribe({
        next: (val: any) => console.log(val),
        error: () => console.log('error!'),
        complete: () => console.log('complete!'),
      })
      .add(() => {
        console.log('add!');
      });

    interval(1000)
      .pipe(
        take(4),
        switchMap((val: number) =>
          iif(
            () => val > 2,
            throwError(() => 0),
            of(val)
          )
        ),
        finalize(() => console.log('finalize'))
      )
      .subscribe({
        next: (val: number) => console.log(val),
        error: () => console.log('error!'),
        complete: () => console.log('complete!'),
      })
      .add(() => {
        console.log('add!');
      });

    const subject$ = new Subject();

    const subscription = subject$
      .pipe(finalize(() => console.log('subject finalize')))
      .subscribe({
        next: (val: any) => console.log(val),
        error: () => console.log('subject error!'),
        complete: () => console.log('subject complete!'),
      });

    subscription.add(() => {
      console.log('subject add!');
    });

    setInterval(() => {
      subject$.next('aaaa');
    }, 3000);

    setTimeout(() => {
      subscription.unsubscribe();
    }, 15000);
  }

  public toPromise(): void {
    of('aaa')
      .toPromise()
      .then((data: any) => {
        console.log(data);
      });

    lastValueFrom(of('aaa')).then((data: any) => {
      console.log(data);
    });

    interval(1000).subscribe((count: number) => {
      console.log('count', count);
    });

    lastValueFrom(interval(1000), { defaultValue: 1000 }).then((data: any) => {
      console.log(data);
    });

    const toPromise$ = new Observable((subscriber: Subscriber<any>) => {
      subscriber.next('Olaaaaaa!!!');
      subscriber.error('2!!!');
      //subscriber.complete();
    });

    lastValueFrom(toPromise$).then((data: any) => {
      console.log(data);
    });
  }
}
