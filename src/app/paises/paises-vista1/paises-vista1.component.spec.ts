import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesVista1Component } from './paises-vista1.component';

describe('PaisesVista1Component', () => {
  let component: PaisesVista1Component;
  let fixture: ComponentFixture<PaisesVista1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisesVista1Component]
    });
    fixture = TestBed.createComponent(PaisesVista1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
