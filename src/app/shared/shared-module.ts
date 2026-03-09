import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputComponent } from './componets/ui-input/ui-input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UiInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UiInputComponent,ReactiveFormsModule]
})
export class SharedModule {}
