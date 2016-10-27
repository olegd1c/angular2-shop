export interface IProduct {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  categories: string[];
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number = 0,
    public rating: number,
    public description: string,
    public categories: string[]) {
  }
}

export class ProductCart {
  public id: number;
  public title: string;
  public price: number = 0;
  public rating: number;
  public description: string;
  public categories: string[];
  public count: number = 0;
  public sum: number = 0;

  constructor(public product: Product,
    private countP: number
  ) {
    this.id = product.id;
    this.title = product.title;
    this.rating = product.rating;
    this.description = product.description;
    this.categories = product.categories;

    this.setPrice(product.price);
    this.setCount(countP);

  }

  public setPrice(priceP: number) {
    this.price = priceP;
    this.sum = this.price * this.count;
  }

  public setCount(countP: number) {
    this.count = countP;
    this.sum = this.price * this.count;
    console.log('sum = ' + this.sum);
  }
}

export class Cart {
  constructor(public id: number,
    public products: ProductCart[]) { }
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

export class Order {
  constructor(
    public id: number,
    public date: string,
    public number: string,    
    public idCustomer: number,
    public sum: number,
    public address: string,
    public status: string
  ) {
  }
}

export class OrderDetails {
  constructor(
    public id: number,
    public order_id: number,
    public prod_id: number,
    public price: number,
    public qty: number,
    public sum: number,
    public lineNumber: number) {
  }
}

export class ProductSearchParams {
  constructor(
    public title: string,
    public minPrice: number,
    public maxPrice: number) {
  }
}


export class OrderDetail {
  constructor(
    public prodId: number,
    public count: number,
    public price: number,
    public sum: number) {
  }
}

export class CartContainer {
  constructor(
    public userId: string,
    public totalSum: number,
    public address: string,
    public orderDetails: OrderDetail[]
  ) {
  }
}