import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseMaintenanceModule } from './Modules/House Maintenance/house-maintenance.module';
import { StockJournalModule } from './Modules/Stock Journal/stock-journal.module';

@NgModule({
  declarations: [
    AppComponent
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
