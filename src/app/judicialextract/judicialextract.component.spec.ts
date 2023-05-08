import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudicialextractComponent } from './judicialextract.component';

describe('JudicialextractComponent', () => {
  let component: JudicialextractComponent;
  let fixture: ComponentFixture<JudicialextractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudicialextractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudicialextractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
