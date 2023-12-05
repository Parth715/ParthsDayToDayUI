export interface IStock {
    date: Date,
    ticker: string,
    buy: number,
    sell: number,
    realized: number,
    reason: string
}