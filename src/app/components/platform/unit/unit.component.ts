import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { UnitService } from '../../../services/unit.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  constructor( 
    private unit: UnitService, 
    private formBuilder: FormBuilder, 
    private ts: ToastrService,
    ) { }
  
  term: any;
  Units: any[];
  p: number = 1;

  ngOnInit() {
    this.loadUnits();
  }
  loadUnits() {
    this.unit.getUnits().subscribe(result => {
      this.Units = result;
    })
  }
}
