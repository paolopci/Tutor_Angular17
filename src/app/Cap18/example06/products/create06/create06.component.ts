import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create06',
  templateUrl: './create06.component.html',
  styleUrl: './create06.component.css'
})
export class Create06Component {
  newproductForm: Products = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router) { }

  createProduct() {
    this.productService.createProduct(this.newproductForm)
      .subscribe({
        next: () => { 
          this.router.navigate(['/products/home06']); 
          console.log('Add new product to list.')
        },
        error: (err) => { console.error(err); }
      });
  }


}
