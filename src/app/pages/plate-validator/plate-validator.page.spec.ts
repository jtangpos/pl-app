import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateValidatorPage } from './plate-validator.page';

describe('PlateValidatorPage', () => {
  let component: PlateValidatorPage;
  let fixture: ComponentFixture<PlateValidatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateValidatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateValidatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
