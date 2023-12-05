import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}
  
  public stockRoute(): void{
    this.router.navigate(["/stocks"]);
  }

  public houseRoute(): void{
    this.router.navigate(["/house"]);
  }

  public carRoute(): void{
    this.router.navigate(["/car"]);
  }
}