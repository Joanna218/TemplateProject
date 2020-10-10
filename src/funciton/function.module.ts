import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
// 引入 uc component
import { UcDropDownComponent } from "./uc-drop-down/uc-drop-down.component";
// 引入 primeng module
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    UcDropDownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule
  ], exports: [
    UcDropDownComponent
  ]
})
export class FunctionModule { }
