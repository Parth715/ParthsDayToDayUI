import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../Header/header.module';
import { CarMaintenanceComponent } from './car-maintenance/car-maintenance.component';

@NgModule({
  declarations: [
    CarMaintenanceComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class CarMaintenanceModule { }
