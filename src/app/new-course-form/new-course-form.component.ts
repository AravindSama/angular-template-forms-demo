import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent implements OnInit {

  form = new FormGroup({
    topics: new FormArray([]),
  })

  addTopic(topic: HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value='';
  }

  removeTopic(topic: FormControl){
    this.topics.controls.indexOf(topic);
  }
  constructor() { }

  ngOnInit() {
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

}
