import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnitService } from '../../../../services/unit.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-unit',
  templateUrl: './new-unit.component.html',
  styleUrls: ['./new-unit.component.css']
})
export class NewUnitComponent implements OnInit {

  constructor( 
    private unit: UnitService, 
    private formBuilder: FormBuilder, 
    private ts: ToastrService
  ) { }

  registerForm: FormGroup;
  submitted = false;
  
  ngOnInit(): void {
    this.createForm();
  }

  get f() { return this.registerForm.controls; this.submitted = false }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) { return; }
    if(this.submitted) { console.log(this.registerForm.value);
      this.unit.setUnit(this.registerForm.value).subscribe( res => { console.log(res);
        this.ts.success(res[0].message);
        this.registerForm.reset()
        this.submitted = false;
      })
    }
  }
}
