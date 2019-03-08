import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditCourseComponent, DIALOG_DATA } from './edit-course/edit-course.component';
import { CourseService } from './course.service';
import { MdComponentsModule } from './md-components/md-components.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    EditCourseComponent
  ],
  entryComponents:[
    EditCourseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdComponentsModule,
  ],
  providers: [
    CourseService,
    {provide: DIALOG_DATA, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
