import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseMaintenanceComponent } from './house-maintenance/house-maintenance.component';
import { HeaderModule } from '../Header/header.module';

@NgModule({
  declarations: [
    HouseMaintenanceComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class HouseMaintenanceModule { }
