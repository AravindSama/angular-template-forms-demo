import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-forms';

  categories= [
    { name: 'Beginner'},
    { name: 'Intermediate'},
    { name: 'Advanced'},
  ];

  minDate = new Date('2017, 1, 1');
  maxDate = new Date('2018, 1, 8');

  isChecked=true;

  colors = [
    {id:1, name:'green'},
    {id:2, name:'blue'},
    {id:3, name:'red'},
  ]

  color =2;
  timer;

  progress = 0;

  isLoading=false;
  constructor(private dialog:MatDialog){
  /*   this.timer = setInterval(() => {
      this.progress++;
      if(this.progress == 100) clearInterval(this.timer)
    },20); */
    

  }
  onChange($event){
    console.log($event);
  }

  categorySelected(category){
    this.categories.filter(c=> c!=category).forEach(c=> c['selected']=false);

    category.selected = !category.selected;
  }

  openDialog(){
    this.dialog.open(EditCourseComponent,{
      data: { courseId: 1}
    }).afterClosed().subscribe(result => console.log(result));
  }
}
