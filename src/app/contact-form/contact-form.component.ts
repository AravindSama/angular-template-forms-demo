import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactMethods=[{id:1,name:'Email'},{id:2,name:'Phone'}, ];

  constructor() { }

  ngOnInit() {
  }

  log(firstName){
    console.log(firstName);
  }



}
