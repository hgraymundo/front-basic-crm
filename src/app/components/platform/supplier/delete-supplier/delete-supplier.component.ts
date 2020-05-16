import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../../../../services/supplier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-supplier',
  templateUrl: './delete-supplier.component.html',
  styleUrls: ['./delete-supplier.component.css']
})
export class DeleteSupplierComponent implements OnInit {

  id: any;
  Supplier: any;
  object_title= "Eliminar Proveedor";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService,
    private ts: ToastrService

  ) { }

  ngOnInit(): void {
    this.loadSupplier();
  }

  loadSupplier(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.supplierService.getSupplierById(this.id).subscribe( res => {
      this.Supplier = res[0];
    })
  }

  deleteSupplier(id){
    this.supplierService.deleteSupplier(id).subscribe( res => {
      this.ts.success(res[0].message);
      this.router.navigate(['/platform/supplier']);
    })
  }


}
