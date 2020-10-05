import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// import mongoose module
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

// db conncetion
@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://siddhesh_95:siddhesh_95@cluster0.sywm5.mongodb.net/nestJsDb?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
