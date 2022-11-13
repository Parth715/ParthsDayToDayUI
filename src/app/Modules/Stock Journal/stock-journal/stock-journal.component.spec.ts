import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockJournalComponent } from './stock-journal.component';

describe('StockJournalComponent', () => {
  let component: StockJournalComponent;
  let fixture: ComponentFixture<StockJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockJournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
