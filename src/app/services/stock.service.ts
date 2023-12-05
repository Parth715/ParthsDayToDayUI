import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Stock } from '../classes/stocks';
import { Observable } from 'rxjs';
import { IStock } from '../interface/stock-interface';
@Injectable()
export class StockService {

  baseUrl = "https://localhost:7088/api/stockjournals";

  constructor(private httpsrv: HttpClient) { }

  getStocks(): Observable<IStock[]> {
    return this.httpsrv.get(`${this.baseUrl}`) as Observable<Stock[]>;
  }

  addStock(trade: Stock): Observable<IStock> {
    return this.httpsrv.post(`${this.baseUrl}`, trade) as Observable<IStock>;
  }
}
