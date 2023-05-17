import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewDataComponent } from './admin-view-data.component';

describe('AdminViewDataComponent', () => {
  let component: AdminViewDataComponent;
  let fixture: ComponentFixture<AdminViewDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
