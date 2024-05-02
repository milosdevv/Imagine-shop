export class Product {
  constructor(
    public productName: string,
    public productPrice: number,
    public productImage: string,
    public id: number,
    public price: number,
    public isActive?: boolean
  ) {}
}
