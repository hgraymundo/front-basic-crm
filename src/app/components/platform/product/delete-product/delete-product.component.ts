import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  id: any;
  Product: any;
  object_title= "Eliminar Producto";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private ts: ToastrService

  ) { }

  ngOnInit(): void {
    this.loadUnit();
  }

  loadUnit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id).subscribe( res => {
      this.Product = res[0];
    })
  }

  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe( res => {
      this.ts.success(res[0].message);
      this.router.navigate(['/platform/product']);
    })
  }

}
