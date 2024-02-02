import {
  EMPTY,
  Observable,
  Subject,
  Subscriber,
  debounceTime,
  defer,
  empty,
  filter,
  from,
  fromEvent,
  generate,
  iif,
  interval,
  of,
  range,
  switchMap,
  throwError,
  timer,
} from 'rxjs';
import { ajax, AjaxError, AjaxResponse } from 'rxjs/ajax';

export class CreationExample {
  public of(): void {
    of(1, 2, 3, 4, 5, () => {}, true).subscribe({
      next: (data: any) => {
        console.log('of next', data);
      },
      complete: () => {
        console.log('of complete');
      },
    });

    of().subscribe({
      next: () => {
        console.log('of empty next!');
      },
      complete: () => {
        console.log('of empty complete!');
      },
    });
  }

  public from(): void {
    from([1, 2, 3, 4, true, 'bolinha', () => {}]).subscribe({
      next: (data: any) => {
        console.log('from next', data);
      },
      complete: () => {
        console.log('from complete');
      },
    });

    from([]).subscribe({
      next: () => {
        console.log('from empty next!');
      },
      complete: () => {
        console.log('from empty complete!');
      },
    });

    from(Promise.resolve('PROMISE')).subscribe({
      next: (value: string) => {
        console.log('from casting', value);
      },
      complete: () => {
        console.log('from casting complete!');
      },
    });
  }

  public empty(): void {
    empty().subscribe({
      next: () => {
        console.log('empty next!');
      },
      complete: () => {
        console.log('empty complete!');
      },
    });

    EMPTY.subscribe({
      next: () => {
        console.log('empty next!');
      },
      complete: () => {
        console.log('empty complete!');
      },
    });

    of().subscribe({
      next: () => {
        console.log('empty next!');
      },
      complete: () => {
        console.log('empty complete!');
      },
    });
  }

  public timer(): void {
    // time informando o tempo de execução.
    timer(2000).subscribe((val) => {
      console.log('due', val, new Date().getTime());
    });

    // execução 1 vai ocorrer em 2 segundos.
    // execução 2 e subsequentes a cada 5 segundos.
    timer(2000, 5000).subscribe((val) => {
      console.log('scheduler', val, new Date().getTime());
    });
  }

  public interval(): void {
    interval(1000).subscribe((val: number) => {
      console.log('interval', val);
    });

    let count = 0;
    setInterval(() => console.log('setInterval', count++), 1000);
  }

  public fromEvent(): void {
    fromEvent(document, 'click')
      .pipe(debounceTime(1000))
      .subscribe((event: Event) => {
        console.log('fromEvent', event);
      });

    const clickEvent$ = new Subject<Event>();
    document.addEventListener('click', (event: Event) =>
      clickEvent$.next(event)
    );

    clickEvent$
      .asObservable()
      .pipe(debounceTime(1000))
      .subscribe((event: Event) => {
        console.log('addEventListener', event);
      });
  }

  public range(): void {
    range(0, 100)
      .pipe(filter((value: number) => value % 2 === 0))
      .subscribe((value: number) => console.log('value', value));
  }

  public throw(): void {
    throwError(() => 'erro!').subscribe({
      next: (value: string) => console.log('value', value),
      error: (error: string) => console.log(`error: ${error}`),
    });

    range(0, 100)
      .pipe(
        switchMap((value: number) =>
          iif(
            () => value <= 50,
            of(value),
            throwError(() => 'error!')
          )
        )
      )
      .subscribe((value: number) => console.log('value', value));
  }

  public ajax(): void {
    ajax('https://rickandmortyapi.com/api/character/301').subscribe({
      next: (response: AjaxResponse<any>) => {
        console.log('response', response.response);
      },
      error: (error: AjaxError) => {
        console.log('error', error);
      },
    });

    ajax({
      url: 'https://rickandmortyapi.com/api/character/301',
      method: 'post',
    }).subscribe({
      next: (response: AjaxResponse<any>) => {
        console.log('response', response.response);
      },
      error: (error: AjaxError) => {
        console.log('error', error);
      },
    });
  }

  public create(): void {
    of('Olá Mundo!').subscribe((value: string) => {
      console.log('of', value);
    });

    new Observable((subscriber: Subscriber<string>) => {
      subscriber.next('Olá Mundo!');
      subscriber.complete();
    }).subscribe((value: string) => {
      console.log('s1', value);
    });

    Observable.create((subscriber: Subscriber<string>) => {
      subscriber.next('Olá Mundo!');
      subscriber.complete();
    }).subscribe((value: string) => {
      console.log('s2', value);
    });
  }

  public defer(): void {
    console.log('current', new Date());

    const d1$ = of(new Date());
    const d2$ = defer(() => of(new Date()));
    const d3$ = of(() => of(new Date()));

    const d4$ = new Observable((subscriber: Subscriber<Date>) => {
      subscriber.next(new Date());
      subscriber.complete();
    });

    setTimeout(() => {
      d2$.subscribe((value: Date) => {
        console.log('defer', value);
      });

      d1$.subscribe((value: Date) => {
        console.log('of', value);
      });

      d3$.pipe(switchMap((data: any) => data())).subscribe((data: any) => {
        console.log('by paulo', data);
      });

      d4$.subscribe((data: any) => {
        console.log('by monica', data);
      });
    }, 20000);

    setTimeout(() => {
      d2$.subscribe((value: Date) => {
        console.log('defer', value);
      });

      d1$.subscribe((value: Date) => {
        console.log('of', value);
      });

      d3$.pipe(switchMap((data: any) => data())).subscribe((data: any) => {
        console.log('by paulo', data);
      });

      d4$.subscribe((data: any) => {
        console.log('by monica', data);
      });
    }, 30000);

    setTimeout(() => {
      d2$.subscribe((value: Date) => {
        console.log('defer', value);
      });

      d1$.subscribe((value: Date) => {
        console.log('of', value);
      });

      d3$.pipe(switchMap((data: any) => data())).subscribe((data: any) => {
        console.log('by paulo', data);
      });

      d4$.subscribe((data: any) => {
        console.log('by monica', data);
      });
    }, 40000);
  }

  public generate(): void {
    console.log('generate');

    generate(
      0,
      (value: number) => value <= 10,
      (value: number) => ++value
    ).subscribe((value: number) => {
      console.log('value', value);
    });

    for (let index = 0; index <= 10; ++index) {
      console.log('for', index);
    }
  }
}
