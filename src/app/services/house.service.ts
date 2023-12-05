import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ihouse } from '../interface/house-interface';

@Injectable()
export class HouseService {

  baseUrl = "https://localhost:7088/api/HouseMaintenances";
  constructor(private httpsrv: HttpClient) { }

  public getMaintenance(): Observable<Ihouse[]>{
    return this.httpsrv.get(`${this.baseUrl}`) as Observable<Ihouse[]>;
  }
}
