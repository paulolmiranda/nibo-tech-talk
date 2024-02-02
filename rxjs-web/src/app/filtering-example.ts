import {
  of,
  find,
  skip,
  last,
  from,
  take,
  first,
  timer,
  filter,
  distinct,
  takeLast,
  interval,
  takeUntil,
  BehaviorSubject,
  distinctUntilKeyChanged,
  throttleTime,
  throttle,
  tap,
  skipWhile,
  skipUntil,
  Subject,
} from 'rxjs';
import { v4 as uuid } from 'uuid';

class User {
  public readonly id: string;

  constructor(public readonly name: string, public readonly roles?: string[]) {
    this.id = uuid();
  }
}

export class FilteringExample {
  public filter(): void {
    from([1, 2, 3, 4, 5, 6])
      .pipe(filter((val: number) => val % 2 === 0))
      .subscribe({
        next: (val: number) => {
          console.log('val', val);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  public find(): void {
    from([1, 2, 3, 4, 5, 6])
      .pipe(find((_: number, index: number) => index === 0))
      .subscribe({
        next: (val?: number) => {
          console.log('val', val);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  public first(): void {
    from([
      { name: 'Brian', value: 0 },
      { name: 'Joe', value: 2 },
      { name: 'Joe', value: 1 },
      { name: 'Sue', value: 0 },
    ])
      .pipe(first())
      .subscribe({
        next: (val: any) => {
          console.log('val', val);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  public last(): void {
    from([
      { name: 'Brian', value: 0 },
      { name: 'Joe', value: 2 },
      { name: 'Joe', value: 1 },
      { name: 'Sue', value: 0 },
    ])
      .pipe(last())
      .subscribe({
        next: (val: any) => {
          console.log('val', val);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  public distinct(): void {
    /*
        const source$ = from([1, 2, 2, 2, 2, 3, 4, 5, 5, 5, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
        */

    const source$ = from([
      new User('Brian'),
      new User('Brian'),
      new User('Brian'),
      new User('Joe'),
      new User('Joe'),
      new User('Joe'),
      new User('Sue'),
      new User('Sue'),
      new User('Sue'),
    ]);

    const example = source$.pipe(distinct());
    example.subscribe((val) => console.log(`Value`, val));
  }

  public distinctUntilChanged(): void {}

  public distinctUntilKeyChanged(): void {
    const source$ = from([
      new User('Brian', [
        'ROLE_USER_INSERT',
        'ROLE_USER_UPDATE',
        'ROLE_USER_DELETE',
        'ROLE_USER_LIST',
        'ROLE_USER_ACTION',
      ]),
      new User('Brian', [
        'ROLE_USER_INSERT',
        'ROLE_USER_UPDATE',
        'ROLE_USER_DELETE',
        'ROLE_USER_LIST',
      ]),
      new User('Brian', [
        'ROLE_USER_INSERT',
        'ROLE_USER_UPDATE',
        'ROLE_USER_DELETE',
        'ROLE_USER_LIST',
      ]),
      new User('Joe', [
        'ROLE_USER_INSERT',
        'ROLE_USER_UPDATE',
        'ROLE_USER_DELETE',
        'ROLE_USER_LIST',
      ]),
      new User('Joe', [
        'ROLE_USER_INSERT',
        'ROLE_USER_UPDATE',
        'ROLE_USER_DELETE',
        'ROLE_USER_LIST',
      ]),
      new User('Joe', [
        'ROLE_USER_INSERT',
        'ROLE_USER_UPDATE',
        'ROLE_USER_DELETE',
        'ROLE_USER_LIST',
      ]),
      new User('Sue', [
        'ROLE_USER_INSERT',
        'ROLE_USER_UPDATE',
        'ROLE_USER_DELETE',
        'ROLE_USER_LIST',
      ]),
      new User('Sue', [
        'ROLE_USER_INSERT',
        'ROLE_USER_UPDATE',
        'ROLE_USER_DELETE',
        'ROLE_USER_LIST',
      ]),
      new User('Sue', [
        'ROLE_USER_INSERT',
        'ROLE_USER_UPDATE',
        'ROLE_USER_DELETE',
        'ROLE_USER_LIST',
        'ROLE_USER_ACTION',
      ]),
    ]);

    const example = source$.pipe(
      distinctUntilKeyChanged(
        'roles',
        (newVale?: string[], oldVale?: string[]) => {
          return newVale?.toString() === oldVale?.toString();
        }
      )
    );

    example.subscribe((val) => console.log(`Value`, val));
  }

  public take(): void {
    const source = of(1, 2, 3, 4, 5);

    source.pipe(take(1)).subscribe((val: number) => {
      console.log('val', val);
    });

    const subject: BehaviorSubject<number> = new BehaviorSubject<number>(10);
    console.log('subject -> value', subject.value);

    subject.pipe(skip(1), take(1)).subscribe((val: number) => {
      console.log('subject -> subscribe', val);
    });

    setTimeout(() => {
      subject.next(100);
      console.log('set timeout!', subject.value);
    }, 5000);
  }

  public takeLast(): void {
    const source = of(1, 2, 3, 4, 5);

    source.pipe(takeLast(2)).subscribe((val: number) => {
      console.log('val', val);
    });

    const subject: BehaviorSubject<number> = new BehaviorSubject<number>(10);
    console.log('subject -> value', subject.value);

    subject.pipe(takeLast(1)).subscribe((val: number) => {
      console.log('subject -> subscribe', val);
    });

    setTimeout(() => {
      subject.next(100);
      console.log('set timeout!', subject.value);
    }, 5000);

    setTimeout(() => {
      subject.next(1000);
      console.log('set timeout!', subject.value);
      subject.complete();
    }, 10000);
  }

  public takeUntil(): void {
    const source = interval(1000);
    const timer$ = timer(12000);

    source.pipe(takeUntil(timer$)).subscribe({
      next: (count: number) => {
        console.log('count', count);
      },
      complete: () => {
        console.log('complete!');
      },
    });
  }

  public takeWhile(): void {}

  public skip(): void {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(skip(5))
      .subscribe((val: number) => {
        console.log('val', val);
      });
  }

  public skipUntil(): void {
    const subject = new Subject<void>();

    interval(1000)
      .pipe(
        tap((val: number) => console.log('[tap] val', val)),
        skipUntil(subject)
      )
      .subscribe((count: number) => {
        console.log('[subscribe] count', count);
      });

    setTimeout(() => {
      subject.error({});
      console.log('setTimeout');
    }, 6000);
  }

  public skipWhile(): void {
    interval(1000)
      .pipe(
        tap((val: number) => console.log('[tap] val', val)),
        skipWhile((val: number) => val % 2 === 0)
      )
      .subscribe((count: number) => {
        console.log('[subscribe] count', count);
      });
  }

  public throttle(): void {
    interval(1000)
      .pipe(
        tap((val: number) => console.log('[tap - throttle] val', val)),
        throttle(() => interval(3000))
      )
      .subscribe((count: number) => {
        console.log('[subscribe] count', count);
      });
  }

  public throttleTime(): void {
    interval(1000)
      .pipe(throttle(() => interval(3000)))
      .subscribe((count: number) => {
        console.log('[throttle] count', count);
      });

    interval(1000)
      .pipe(throttleTime(3000))
      .subscribe((count: number) => {
        console.log('[throttleTime] count', count);
      });
  }
}
