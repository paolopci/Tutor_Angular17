import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-home06',
  templateUrl: './home06.component.html',
  styleUrl: './home06.component.css'
})
export class Home06Component implements OnInit {
  products: Products[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }

}
