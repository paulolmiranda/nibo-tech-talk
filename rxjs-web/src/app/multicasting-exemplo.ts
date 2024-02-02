import { interval, share, shareReplay } from "rxjs";

export class MulticastingExample {
    
  protected share(): void {
    const source$ = interval(1000).pipe(share());

    source$.subscribe((val: number) => {
      console.log('A', val);
    });

    setTimeout(() => {
      source$.subscribe((val: number) => {
        console.log('B', val);
      });
    }, 2000);

    setTimeout(() => {
      source$.subscribe((val: number) => {
        console.log('C', val);
      });
    }, 4000);

    setTimeout(() => {
      source$.subscribe((val: number) => {
        console.log('D', val);
      });
    }, 6000);
  }

  protected shareReplay(): void {
    const source$ = interval(1000).pipe(shareReplay(3));

    // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

    // A - 1 = 1, 2, 3
    // B - 3 = 1, 2, 3
    // C - 9 = 6, 7, 8

    source$.subscribe((val: number) => {
      console.log('A', val);
    });

    setTimeout(() => {
      source$.subscribe((val: number) => {
        console.log('B', val);
      });
    }, 2000);

    setTimeout(() => {
      source$.subscribe((val: number) => {
        console.log('C', val);
      });
    }, 4000);

    setTimeout(() => {
      source$.subscribe((val: number) => {
        console.log('D', val);
      });
    }, 6000);
  }
}