import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilextractdocumentComponent } from './civilextractdocument.component';

describe('CivilextractdocumentComponent', () => {
  let component: CivilextractdocumentComponent;
  let fixture: ComponentFixture<CivilextractdocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilextractdocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilextractdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
