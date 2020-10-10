import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
// module
import { FunctionModule } from '../../funciton/function.module';

@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    CommonModule,
    FunctionModule
  ], exports: [
    DemoComponent
  ]
})
export class DemoModule { }
