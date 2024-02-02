import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';

@Module({
  providers: [],
  controllers: [ProductController],
})
export class ProductModule {}
