import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor( 
    private productService: ProductService, 
    private formBuilder: FormBuilder, 
    private ts: ToastrService,
    ) { }
    object_title = "Productos";
    btn_new= "Nuevo Producto";
    term: any;
    Products: any[];
    p: number = 1;
  
    ngOnInit() {
      this.loadProducts();
    }
    loadProducts() {
      this.productService.getProduct().subscribe(result => {
        this.Products = result;
      })
    }
}
