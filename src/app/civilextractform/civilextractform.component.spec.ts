import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilextractformComponent } from './civilextractform.component';

describe('CivilextractformComponent', () => {
  let component: CivilextractformComponent;
  let fixture: ComponentFixture<CivilextractformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilextractformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilextractformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
