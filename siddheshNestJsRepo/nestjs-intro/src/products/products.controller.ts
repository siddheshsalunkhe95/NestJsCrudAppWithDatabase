import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {

  constructor(private readonly productsService: ProductsService) { }

  /**************************** post method ****************************/
  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = await this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }


  /**************************** get method ****************************/
  @Get()
  async getAllProducts() {
    const products = await this.productsService.getProducts();
    return products;
  }


  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }


  /**************************** update method ****************************/
  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    await this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return null;
  }


  /**************************** delete method ****************************/
  @Delete(':id')
  async removeProduct(@Param('id') prodId: string) {
    await this.productsService.deleteProduct(prodId);
    return null;
  }

}
