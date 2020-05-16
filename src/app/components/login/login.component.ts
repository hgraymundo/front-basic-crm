import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  error: any = null;
  @Input() LoginDetails = { email: 'nose@nose.com', password:'D3v3l0per' }


  constructor( private formBuilder: FormBuilder, public auth: AuthService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    } else {
      this.auth.setSesion(this.loginForm.value).subscribe( data => {
        this.auth.setLocalSesion(JSON.stringify(data));
      },
      err => {
        if(err.status === 400)
          this.error = err.error['message'];
        
      })
    }
}

}
