import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormHelper } from 'src/app/utils/helpers';

@Component({
  selector: 'bg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormHelper implements OnInit  {
  public loginForm: FormGroup;
  
  constructor(private fb: FormBuilder) { 
    super();
    this.loginForm = this.fb.group({
      email_address: this.fb.group({
        email_address: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
      }),
      password: this.fb.group({
        password: this.fb.control('', Validators.compose([Validators.required]))
      })
    });

    this.InitForm(this.loginForm);
  }

  ngOnInit() {
  }

// close the login form
  public onClose() {
    console.log('close');
  }

}
