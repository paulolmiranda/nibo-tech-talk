import { Controller, Get, Param } from '@nestjs/common';
import { Observable, delay, of } from 'rxjs';

import { Product } from './product';
import { Client } from 'src/client/client';
import { clients, products } from 'src/app.constants';

@Controller('products')
export class ProductController {
  @Get('/client/:clientId')
  public getAllByClients(@Param('clientId') clientId: string): Observable<Product[]> {
    const client = clients.find((item: Client) => item.id === clientId);
    const data = products.filter((item: Product) => item.clientId === clientId);
    return of(data).pipe(delay(client.due));
  }
}
