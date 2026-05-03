import {Component, OnInit} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {ParseTreeResult} from '@angular/compiler';
import {ProductService} from '../services/productService';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  products : any;

  //dependancie injection:
  constructor(private productservice:ProductService) {}

  ngOnInit():void{
    this.getAllProducts();
  }

  getAllProducts(){
    this.products = this.productservice.getAllProducts();
  }

  handelDelete(product: any) {
    let v = confirm(" etes vous sur de supprimer ce produit ");
    if (v==true){
      this.productservice.deleteProduct(product);
      this.getAllProducts();
    }
  }
}
