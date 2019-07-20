/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarritocomprasComponent } from './carritocompras.component';

describe('CarritocomprasComponent', () => {
  let component: CarritocomprasComponent;
  let fixture: ComponentFixture<CarritocomprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritocomprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritocomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
