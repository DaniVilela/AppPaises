import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PaisesVista1Component } from './paises-vista1/paises-vista1.component';
import { PaisesVista2Component } from './paises-vista2/paises-vista2.component';
import { PaisesHomeComponent } from './paises-home/paises-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: PaisesHomeComponent,
  },
  {
    path: 'vista1',
    component: PaisesVista1Component,
  },
  {
    path: 'vista2',
    component: PaisesVista2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisesRoutingModule {}
