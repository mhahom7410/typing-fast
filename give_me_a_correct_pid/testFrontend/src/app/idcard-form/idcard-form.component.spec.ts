import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDCardFormComponent } from './idcard-form.component';

describe('IDCardFormComponent', () => {
  let component: IDCardFormComponent;
  let fixture: ComponentFixture<IDCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDCardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IDCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
