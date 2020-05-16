import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SupplierService } from '../../../services/supplier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor( 
    private supplierService: SupplierService, 
    private formBuilder: FormBuilder, 
    private ts: ToastrService,
    ) { }
    object_title = "Proveedores";
    btn_new= "Nuevo Proveedor";
    term: any;
    Suppliers: any[];
    p: number = 1;
  
    ngOnInit() {
      this.loadSuppliers();
    }
    loadSuppliers() {
      this.supplierService.getSupplier().subscribe(result => {
        this.Suppliers = result;
      })
    }

}
