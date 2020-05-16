import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnitService } from '../../../../services/unit.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-unit',
  templateUrl: './update-unit.component.html',
  styleUrls: ['./update-unit.component.css']
})
export class UpdateUnitComponent implements OnInit {

  unitId: any;
  Unit: any;
  updateForm: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private unitService: UnitService,
    private ts: ToastrService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.loadUnit();
  }

  loadUnit(){
    this.unitId = this.route.snapshot.paramMap.get('id');
    this.unitService.getUnitById(this.unitId).subscribe( res => {
      this.Unit = res[0];
      this.updateForm.controls['name'].setValue(this.Unit.name); 
    })
  }

  get f() { return this.updateForm.controls; this.submitted = false }

  createForm() {
    this.updateForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.updateForm.invalid) { return; }
    if(this.submitted) { console.log(this.updateForm.value);
      this.unitService.updateUnit(this.unitId, this.updateForm.value).subscribe( res => { console.log(res);
        this.ts.success(res[0].message);
        this.submitted = false;
      })
    }
  }

}
