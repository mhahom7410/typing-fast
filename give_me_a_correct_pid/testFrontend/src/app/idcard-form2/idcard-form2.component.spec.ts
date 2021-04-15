import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcardForm2Component } from './idcard-form2.component';

describe('IdcardForm2Component', () => {
  let component: IdcardForm2Component;
  let fixture: ComponentFixture<IdcardForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdcardForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdcardForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
