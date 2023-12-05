import { IStock } from "../interface/stock-interface";

export class Stock implements IStock{
    date = new Date();
    ticker = "";
    buy = 0;
    sell = 0;
    realized = 0;
    reason = "";
}