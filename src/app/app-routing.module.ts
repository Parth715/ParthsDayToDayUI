import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarMaintenanceComponent } from './Modules/Car Maintenance/car-maintenance/car-maintenance/car-maintenance.component';
import { HomeComponent } from './Modules/Home/home.component';
import { HouseMaintenanceComponent } from './Modules/House Maintenance/house-maintenance/house-maintenance.component';
import { StockJournalComponent } from './Modules/Stock Journal/stock-journal/stock-journal.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "stocks", component: StockJournalComponent},
  {path: "house", component: HouseMaintenanceComponent},
  {path: "car", component: CarMaintenanceComponent},
  {path: "**", redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }