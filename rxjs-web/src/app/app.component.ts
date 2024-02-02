import { HttpClient } from '@angular/common/http';
import { OnInit, Component } from '@angular/core';
import { Observable, concatMap, from, map, mergeMap, switchMap } from 'rxjs';
import { Client, Product } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getClients().subscribe({
      next: (clients: Client[]) => {
        clients.forEach((client: Client, index: number) =>
          this.init(client, index)
        );
      },
    });
  }
  /*
   * Transformation
   * - switchMap
   * - concatMap
   * - mergeMap
   * */
  private init(client: Client, index: number): void {
    this.getClientById(client.id)
      .pipe(
        /*
        concatMap((data: Client) =>
          this.getProductsByClient(data.id).pipe(
            map((products: Product[]) => {
              return { ...data, products } as Client;
            })
          )
        )*/
        /*
        switchMap((data: Client) =>
          this.getProductsByClient(data.id).pipe(
            map((products: Product[]) => {
              return { ...data, products } as Client;
            })
          )
        )*/
        /*
        mergeMap((data: Client) =>
          this.getProductsByClient(data.id).pipe(
            map((products: Product[]) => {
              return { ...data, products } as Client;
            })
          )
        )*/
      )
      .subscribe({
        next: (client: Client) => {
          console.log('client', index, client);
        },
      });
  }

  public getClientById(id: string): Observable<Client> {
    return this.http.get<Client>(`http://localhost:3000/clients/${id}`);
  }

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`http://localhost:3000/clients`);
  }

  public getProductsByClient(clientId: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `http://localhost:3000/products/client/${clientId}`
    );
  }
}
