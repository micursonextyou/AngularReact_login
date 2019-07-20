import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncajaComponent } from './encaja.component';

describe('EncajaComponent', () => {
  let component: EncajaComponent;
  let fixture: ComponentFixture<EncajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
