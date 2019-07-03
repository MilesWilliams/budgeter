import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputElementComponent } from './input-element/input-element.component';
import { SelectElementComponent } from './select-element/select-element.component';
import { RadioElementComponent } from './radio-element/radio-element.component';
import { CheckboxElementComponent } from './checkbox-element/checkbox-element.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    InputElementComponent,
    SelectElementComponent,
    RadioElementComponent,
    CheckboxElementComponent
  ],
  exports: [
    InputElementComponent,
    SelectElementComponent,
    RadioElementComponent,
    CheckboxElementComponent
  ]
})
export class FormElementsModule { }
