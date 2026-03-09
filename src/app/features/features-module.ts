import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module';
import { DefenseSimulatorComponent } from './defense-simulator/defense-simulator';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DefenseSimulatorComponent],
  imports: [CommonModule,
    SharedModule,
    ReactiveFormsModule],
  exports: [DefenseSimulatorComponent]
})
export class FeaturesModule {}
