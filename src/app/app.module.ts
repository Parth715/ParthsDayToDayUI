import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Modules/Home/home.component';
import { HouseMaintenanceModule } from './Modules/House Maintenance/house-maintenance.module';
import { StockJournalModule } from './Modules/Stock Journal/stock-journal.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockJournalModule,
    HouseMaintenanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
