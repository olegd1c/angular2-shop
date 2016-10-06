
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[]) {
  }
}

export class ProductCart {
  constructor(public productId: number,
    public title: string,
    public price: number,
    public count: number
    ) {}
}

export class Cart {
    constructor(public id: number,
    public products: ProductCart[] ){}
}

export class Review {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: Date,
    public user: string,
    public rating: number,
    public comment: string) {
  }
}