import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockJournalComponent } from './stock-journal/stock-journal.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../Header/header.module';

@NgModule({
  declarations: [
    StockJournalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule
  ],
  exports: [StockJournalComponent]
})
export class StockJournalModule { }
