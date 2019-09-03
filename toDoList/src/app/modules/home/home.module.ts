import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { ToDoElementComponent } from './to-do-element/to-do-element.component';
import {FormsModule} from "@angular/forms";
import { InputToDoComponent } from './input-to-do/input-to-do.component';
import {Store} from "./store/store";



@NgModule({
  declarations: [FieldComponent, ToDoElementComponent, InputToDoComponent],
  exports: [
    FieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    Store
  ]
})
export class HomeModule { }
