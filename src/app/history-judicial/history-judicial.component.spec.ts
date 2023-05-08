import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryJudicialComponent } from './history-judicial.component';

describe('HistoryJudicialComponent', () => {
  let component: HistoryJudicialComponent;
  let fixture: ComponentFixture<HistoryJudicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryJudicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryJudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
