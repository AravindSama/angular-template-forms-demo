import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { UsernameValidators } from './username.validators';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  
  form = new FormGroup({
    'username' : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      UsernameValidators.cannotContainSpace,
      UsernameValidators.shouldBeUnique]),
    'password' : new FormControl('',Validators.required),
    'account': new FormGroup({
        'address1':new FormControl('',Validators.required),
    })


  })

  get username(){
    return this.form.get('username');
  }

  
  get password(){
    return this.form.get('password');
  }

  get address1(){
    return this.form.get('account.address1');
  }
  
  login(){
    console.log("hello");
  }
  }
