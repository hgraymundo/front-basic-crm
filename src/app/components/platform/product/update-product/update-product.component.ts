import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: any;
  Product: any;
  updateForm: FormGroup;
  submitted = false;
  object_title = "Actualizar Producto";

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.loadUnit();
  }

  loadUnit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id).subscribe( res => {
      this.Product = res[0];
      this.updateForm.controls['code'].setValue(this.Product.code); 
      this.updateForm.controls['name'].setValue(this.Product.name); 
    })
  }

  get f() { return this.updateForm.controls; this.submitted = false }

  createForm() {
    this.updateForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.updateForm.invalid) { return; }
    if(this.submitted) { console.log(this.updateForm.value);
      this.productService.updateProduct(this.id, this.updateForm.value).subscribe( res => { console.log(res);
        this.toastrService.success(res[0].message);
        this.submitted = false;
      })
    }
  }

}
