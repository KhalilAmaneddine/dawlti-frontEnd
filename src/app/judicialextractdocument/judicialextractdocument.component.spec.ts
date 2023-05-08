import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudicialextractdocumentComponent } from './judicialextractdocument.component';

describe('JudicialextractdocumentComponent', () => {
  let component: JudicialextractdocumentComponent;
  let fixture: ComponentFixture<JudicialextractdocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudicialextractdocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudicialextractdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
