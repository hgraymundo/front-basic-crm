import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor( 
    private productService: ProductService, 
    private formBuilder: FormBuilder, 
    private ts: ToastrService
  ) { }

  registerForm: FormGroup;
  submitted = false;
  object_title = "Nuevo Producto";
  
  ngOnInit(): void {
    this.createForm();
  }

  get f() { return this.registerForm.controls; this.submitted = false }

  createForm() {
    this.registerForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) { return; }
    if(this.submitted) { console.log(this.registerForm.value);
      this.productService.setProduct(this.registerForm.value).subscribe( res => { console.log(res);
        this.ts.success(res[0].message);
        this.registerForm.reset()
        this.submitted = false;
      })
    }
  }
}
