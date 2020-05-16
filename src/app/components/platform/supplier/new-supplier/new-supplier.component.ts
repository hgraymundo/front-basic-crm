import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../../../../services/supplier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.css']
})
export class NewSupplierComponent implements OnInit {

  constructor( 
    private supplierService: SupplierService, 
    private formBuilder: FormBuilder, 
    private ts: ToastrService
  ) { }

  registerForm: FormGroup;
  submitted = false;
  object_title = "Nuevo Proveedor";
  
  ngOnInit(): void {
    this.createForm();
  }

  get f() { return this.registerForm.controls; this.submitted = false }

  createForm() {
    this.registerForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      contact_name: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) { return; }
    if(this.submitted) { console.log(this.registerForm.value);
      this.supplierService.setSupplier(this.registerForm.value).subscribe( res => { console.log(res);
        this.ts.success(res[0].message);
        this.registerForm.reset()
        this.submitted = false;
      })
    }
  }

}
