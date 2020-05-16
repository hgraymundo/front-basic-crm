import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitService } from '../../../../services/unit.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-unit',
  templateUrl: './delete-unit.component.html',
  styleUrls: ['./delete-unit.component.css']
})
export class DeleteUnitComponent implements OnInit {

  unitId: any;
  Unit: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unitService: UnitService,
    private ts: ToastrService

  ) { }

  ngOnInit(): void {
    this.loadUnit();
  }

  loadUnit(){
    this.unitId = this.route.snapshot.paramMap.get('id');
    this.unitService.getUnitById(this.unitId).subscribe( res => {
      this.Unit = res[0];
    })
  }

  deleteUnit(id){
    this.unitService.deleteUnit(id).subscribe( res => {
      this.ts.success(res[0].message);
      this.router.navigate(['/platform/unit']);
    })
  }

}
