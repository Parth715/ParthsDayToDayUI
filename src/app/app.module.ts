import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Modules/Home/home.component';
import { HouseMaintenanceModule } from './Modules/House Maintenance/house-maintenance.module';
import { StockJournalModule } from './Modules/Stock Journal/stock-journal.module';
import { StockService } from './services/stock.service';
import { CarMaintenanceComponent } from './Modules/Car Maintenance/car-maintenance/car-maintenance/car-maintenance.component';
import { CarMaintenanceModule } from './Modules/Car Maintenance/car-maintenance/car-maintenance.module';
import { HeaderComponent } from './Modules/Header/header.component';
import { HouseService } from './services/house.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StockJournalModule,
    HouseMaintenanceModule,
    CarMaintenanceModule
  ],
  providers: [
    HttpClient,
    StockService,
    HouseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
