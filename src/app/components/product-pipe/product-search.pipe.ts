import { Pipe, PipeTransform } from '@angular/core';
import { Product, ProductSearchParams } from '../../app-model';

@Pipe({
  name: 'minPrice'
})
export class ProductSearchPipe implements PipeTransform {

transform(value: any, minPrice: number): any {
        console.log("pipe");
        console.log(ProductSearchParams);
        return value.filter((item) => Number(item.price) < minPrice);
    }
}
