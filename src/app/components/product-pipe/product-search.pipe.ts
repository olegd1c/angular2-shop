import { Pipe, PipeTransform } from '@angular/core';
import { Product, ProductSearchParams } from '../../app-model';

@Pipe({
  name: 'minPrice'
})
export class ProductSearchPipe implements PipeTransform {

transform(value: any, productSearchParams: ProductSearchParams): any {
        console.log("pipe");
        //console.log(ProductSearchParams);
        return value.filter((item) => Number(item.price) > productSearchParams.minPrice 
          && (productSearchParams.maxPrice <= 0 || productSearchParams.maxPrice > 0 && Number(item.price) <= productSearchParams.maxPrice))
          .filter((item) => productSearchParams.title == "" || item.title.indexOf(productSearchParams.title) >= 0 )
          ;
    }
}
