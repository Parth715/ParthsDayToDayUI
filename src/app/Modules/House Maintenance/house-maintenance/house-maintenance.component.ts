import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/classes/house';
import { Ihouse } from 'src/app/interface/house-interface';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-maintenance',
  templateUrl: './house-maintenance.component.html',
  styleUrls: ['./house-maintenance.component.css']
})
export class HouseMaintenanceComponent implements OnInit {

  maintanence: Ihouse[] = [];
  constructor(private housesrv: HouseService) { }

  ngOnInit(): void {
    this.housesrv.getMaintenance().subscribe(tasks => this.maintanence = tasks);
  }

}
