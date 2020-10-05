import { Module } from '@nestjs/common';

// import mongoose module
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.model';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';


@Module({
  // import schema
  imports: [
    MongooseModule.forFeature(
      [
        { name: 'Product', schema: ProductSchema }
      ]
    ),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }
