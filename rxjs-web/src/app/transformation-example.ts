import { Observable, Subscriber, from, map, of, switchMap } from 'rxjs';

class Pessoa {
  constructor(public codigo: number, public nome: string) {}
}

class Aluno {
  constructor(
    public id: number,
    public nome: string,
    public matricola: string
  ) {}
}

export class TransformationExample {
  protected map(): void {
    const pessoas: Pessoa[] = [
      new Pessoa(1, 'Toniorid'),
      new Pessoa(2, 'Carond'),
      new Pessoa(3, 'Rulgi'),
      new Pessoa(4, 'Morsu'),
      new Pessoa(5, 'Tesoeush'),
      new Pessoa(6, 'Lincogeo'),
      new Pessoa(7, 'Zivir'),
      new Pessoa(8, 'Zemopoa'),
    ];

    from<Pessoa[]>(pessoas)
      .pipe(
        map(
          (pessoa: Pessoa) =>
            new Aluno(pessoa.codigo, pessoa.nome, `${10 * pessoa.codigo + 1}`)
        )
      )
      .subscribe((aluno: Aluno) => {
        console.log('[map] Aluno', aluno);
      });
  }

  protected switchMap(): void {
    const matricula$ = new Observable<number>(
      (subscribe: Subscriber<number>) => {
        subscribe.next(Math.floor(Math.random() * 10000));
        subscribe.complete();
      }
    );

    const pessoas: Pessoa[] = [
      new Pessoa(1, 'Toniorid'),
      new Pessoa(2, 'Carond'),
      new Pessoa(3, 'Rulgi'),
      new Pessoa(4, 'Morsu'),
      new Pessoa(5, 'Tesoeush'),
      new Pessoa(6, 'Lincogeo'),
      new Pessoa(7, 'Zivir'),
      new Pessoa(8, 'Zemopoa'),
    ];

    from<Pessoa[]>(pessoas)
      .pipe(
        switchMap((pessoa: Pessoa) =>
          matricula$.pipe(
            map(
              (val: number) => new Aluno(pessoa.codigo, pessoa.nome, `${val}`)
            )
          )
        ),
        switchMap(() => of(1)),
        switchMap(() => of(2)),
        switchMap(() => of(3)),
        switchMap(() => of('Bolinha'))
      )
      .subscribe((aluno: string) => {
        console.log('[switchMap] Aluno', aluno);
      });
  }
}
