import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatusLightComponent } from './status-light/status-light.component';

@NgModule({
  declarations: [
    StatusLightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusLightComponent
  ]
})
export class NgComponentsVdModule { }
