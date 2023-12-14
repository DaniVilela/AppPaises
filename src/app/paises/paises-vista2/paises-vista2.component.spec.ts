import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesVista2Component } from './paises-vista2.component';

describe('PaisesVista2Component', () => {
  let component: PaisesVista2Component;
  let fixture: ComponentFixture<PaisesVista2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisesVista2Component]
    });
    fixture = TestBed.createComponent(PaisesVista2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
