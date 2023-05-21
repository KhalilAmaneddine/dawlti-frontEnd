import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewJudicialComponent } from './admin-view-judicial.component';

describe('AdminViewJudicialComponent', () => {
  let component: AdminViewJudicialComponent;
  let fixture: ComponentFixture<AdminViewJudicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewJudicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewJudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
