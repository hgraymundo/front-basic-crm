import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../../../../services/supplier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {

  id: any;
  Supplier: any;
  updateForm: FormGroup;
  submitted = false;
  object_title = "Actualizar Proveedor";

  constructor(
    private route: ActivatedRoute,
    private supplierService: SupplierService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.loadUnit();
  }

  loadUnit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.supplierService.getSupplierById(this.id).subscribe( res => {
      this.Supplier = res[0];
      this.updateForm.controls['code'].setValue(this.Supplier.code); 
      this.updateForm.controls['name'].setValue(this.Supplier.name); 
      this.updateForm.controls['contact_name'].setValue(this.Supplier.contact_name); 
      this.updateForm.controls['phone'].setValue(this.Supplier.phone); 
    })
  }

  get f() { return this.updateForm.controls; this.submitted = false }

  createForm() {
    this.updateForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      contact_name: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.updateForm.invalid) { return; }
    if(this.submitted) { console.log(this.updateForm.value);
      this.supplierService.updateSupplier(this.id, this.updateForm.value).subscribe( res => { console.log(res);
        this.toastrService.success(res[0].message);
        this.submitted = false;
      })
    }
  }


}
