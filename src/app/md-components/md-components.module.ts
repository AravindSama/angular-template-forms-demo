import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatFormFieldModule, MatNativeDateModule, MatIconModule, MatButtonModule, MatChipsModule, MatProgressSpinner, MatProgressSpinnerModule, MatTooltipModule, MatDialogModule, MatDialogClose } from '@angular/material';
import {MatInputModule} from '@angular/material/input'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatNativeDateModule,
  ]
})
export class MdComponentsModule { }
