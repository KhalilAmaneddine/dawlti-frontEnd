import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewCivilComponent } from './admin-view-civil.component';

describe('AdminViewCivilComponent', () => {
  let component: AdminViewCivilComponent;
  let fixture: ComponentFixture<AdminViewCivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewCivilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
