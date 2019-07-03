import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElementsModule } from './elements/form-elements/form-elements.module';
import { ButtonElementComponent } from './elements/button-element/button-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormElementsModule
  ],
  declarations: [ButtonElementComponent],
  exports: [
    FormElementsModule,
    ButtonElementComponent
  ]
})
export class SharedModule { }
