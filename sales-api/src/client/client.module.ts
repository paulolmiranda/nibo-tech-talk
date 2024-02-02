import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';

@Module({
  providers: [],
  controllers: [ClientController],
})
export class ClientModule {}
