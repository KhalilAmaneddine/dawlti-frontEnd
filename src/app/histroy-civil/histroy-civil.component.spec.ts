import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistroyCivilComponent } from './histroy-civil.component';

describe('HistroyCivilComponent', () => {
  let component: HistroyCivilComponent;
  let fixture: ComponentFixture<HistroyCivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistroyCivilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistroyCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
