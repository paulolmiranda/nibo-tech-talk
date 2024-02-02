import {
  Observable,
  AsyncSubject,
  BehaviorSubject,
  ReplaySubject,
  Subject,
  Subscriber,
  interval,
  timer,
} from 'rxjs';

export class SubjectExample {
  public observable(): void {
    const counter$ = new Observable<number>(
      (subscriber: Subscriber<number>) => {
        console.log('next...');
        subscriber.next();
        subscriber.error();
        subscriber.next();
        subscriber.complete();
        subscriber.next();
      }
    );

    /**
     * - observador se registre no observable.
     * - receber as notificações dos eventos.
     * - retorno de assinatura que se chama subscription.
     * Com o subscription é possível cancelar a inscrição.
     */
    const subscription = counter$.subscribe({
      /**
       * - executado sempre um novo valor for emitido.
       * - executado sempre que next() enviar um novo valor.
       */
      next: () => {
        console.log('next run...');
      },
      /**
       * - executado sempre que um erro for emitido, pelo Observable.
       * - a execução do erro interromper o observable.
       */
      error: () => {
        console.log('error run...');
      },
      /**
       * - executado sempre que o observable é encerrado.
       * - após a execução do complete nenhum valor será emitido.
       */
      complete: () => {
        console.log('complete run...');
      },
    });

    counter$.subscribe({
      next: () => {
        console.log('next run...');
      },
      error: () => {
        console.log('error run...');
      },
      complete: () => {
        console.log('complete run...');
      },
    });
  }

  public subject(): void {
    const counter$ = new Subject<number>();

    interval(2000).subscribe((count: number) => {
      console.log('[counter$] next', count);
      counter$.next(count);
    });

    const aaa = counter$.subscribe({
      next: (count: number) => {
        console.log('[A] next', count);
      },
      error: () => {
        console.log('[A] error');
      },
      complete: () => {
        console.log('[A] complete');
      },
    });

    const bbb = counter$.subscribe({
      next: (count: number) => {
        console.log('[B] next', count);
      },
      error: () => {
        console.log('[B] error');
      },
      complete: () => {
        console.log('[B] complete');
      },
    });

    timer(4000).subscribe(() => {
      aaa.unsubscribe();
      bbb.unsubscribe();
    });

    timer(8000).subscribe(() => {
      counter$.subscribe({
        next: (count: number) => {
          console.log('[C] next', count);
        },
        error: () => {
          console.log('[C] error');
        },
        complete: () => {
          console.log('[C] complete');
        },
      });
    });
  }

  public behaviorSubject(): void {
    const counter$ = new BehaviorSubject<number | null>(null);

    counter$.subscribe({
      next: (count: number | null) => {
        console.log('[A] next', count);
      },
      error: () => {
        console.log('[A] error');
      },
      complete: () => {
        console.log('[A] complete');
      },
    });

    interval(6000).subscribe((count: number) => {
      console.log('[counter$] next', count);
      counter$.next(count);

      if (count === 3) {
        counter$.complete();
      }
    });

    timer(13000).subscribe(() => {
      counter$.subscribe({
        next: (count: number | null) => {
          console.log('[B] next', count);
        },
        error: () => {
          console.log('[B] error');
        },
        complete: () => {
          console.log('[B] complete');
        },
      });
    });
  }

  public replaySubject(): void {
    const counter$ = new ReplaySubject<number>(3);

    counter$.subscribe({
      next: (count: number) => {
        console.log('[A] next', count);
      },
      error: () => {
        console.log('[A] error');
      },
      complete: () => {
        console.log('[A] complete');
      },
    });

    interval(3000).subscribe((count: number) => {
      console.log('[counter$] next', count);
      counter$.next(count);
    });

    timer(13000).subscribe(() => {
      counter$.subscribe({
        next: (count: number | null) => {
          console.log('[B] next', count);
        },
        error: () => {
          console.log('[B] error');
        },
        complete: () => {
          console.log('[B] complete');
        },
      });
    });
  }

  public asyncSubject(): void {
    const counter$ = new AsyncSubject<number>();

    interval(2000).subscribe((count: number) => {
      console.log('[counter$] next', count);
      counter$.next(count);

      if (count === 5) {
        counter$.complete();
      }
    });

    counter$.subscribe({
      next: (count: number) => {
        console.log('[A] next', count);
      },
      error: () => {
        console.log('[A] error');
      },
      complete: () => {
        console.log('[A] complete');
      },
    });
  }
}
