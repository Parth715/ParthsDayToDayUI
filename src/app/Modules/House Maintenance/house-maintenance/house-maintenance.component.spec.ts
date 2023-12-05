import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseMaintenanceComponent } from './house-maintenance.component';

describe('HouseMaintenanceComponent', () => {
  let component: HouseMaintenanceComponent;
  let fixture: ComponentFixture<HouseMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
