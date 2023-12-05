import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingPath } from 'src/app/classes/routing-path';
import { Stock } from 'src/app/classes/stocks';
import { IStock } from 'src/app/interface/stock-interface';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-journal',
  templateUrl: './stock-journal.component.html',
  styleUrls: ['./stock-journal.component.css']
})
export class StockJournalComponent implements OnInit{

  stocks: IStock[] = [];
  addNew: IStock = new Stock();

  constructor(private router: Router, private stocksrv: StockService) { }

  ngOnInit(): void {
    this.stocksrv.getStocks().subscribe(
      stocks => {this.stocks = stocks;}
    );
  }

  public homeRedirect(): void {
    this.router.navigateByUrl(RoutingPath.home);
  }

  public keypressed(event: KeyboardEvent): void {
    if(event.key === "Enter" && this.addNew.reason != "")
      this.addTrade();
  }
  private addTrade():void {
    this.stocksrv.addStock(this.addNew).subscribe(
      _ => this.ngOnInit()
    );
  }
}
