import { of, switchMap, forkJoin, delay, tap, throwError } from 'rxjs';

export class CombinationExample {
  protected forkJoin(): void {
    forkJoin({
      a: of('Dentinho').pipe(
        delay(5000),
        tap((val: string) => console.log(val))
      ),
      b: of('Iolanda').pipe(tap((val: string) => console.log(val))),
      c: of('Nicolas').pipe(tap((val: string) => console.log(val))),
      d: of('DEU RUIM!!!').pipe(
        delay(5000),
        tap((val: string) => console.log(val)),
        switchMap(() => throwError(() => 'Error'))
      ),
    }).subscribe((data: any) => {
      console.log('data', data);
    });
  }
}
