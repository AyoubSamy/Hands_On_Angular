import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

   products = [
    { id: 1, name: 'computer', price: 2556, selected: true },
    { id: 2, name: 'printer', price: 2800, selected: true },
    { id: 3, name: 'phone', price: 8880, selected: false },
    { id: 4, name: 'television', price: 7720, selected: false },
  ]

  constructor() {
  }
  getAllProducts(){
    return this.products
  }

  deleteProduct(product:any){
    this.products = this.products.filter((p:any):boolean=>p.id!=product.id);
  }

}
