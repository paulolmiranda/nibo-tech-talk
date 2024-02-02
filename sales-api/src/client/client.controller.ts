import { Controller, Get, Param } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Client } from './client';
import { clients } from 'src/app.constants';

@Controller('clients')
export class ClientController {
  @Get('/:id')
  public getById(@Param('id') id: string): Observable<Client> {
    const client = clients.find((item: Client) => item.id === id);
    return of(client);
  }

  @Get()
  public getAll(): Observable<Client[]> {
    return of(clients);
  }
}
