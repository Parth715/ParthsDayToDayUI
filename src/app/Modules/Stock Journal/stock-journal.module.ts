import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockJournalComponent } from './stock-journal/stock-journal.component';

@NgModule({
  declarations: [
    StockJournalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [StockJournalComponent]
})
export class StockJournalModule { }
