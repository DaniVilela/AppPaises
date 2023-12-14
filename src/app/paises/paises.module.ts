import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesHomeComponent } from './paises-home/paises-home.component';
import { PaisesVista1Component } from './paises-vista1/paises-vista1.component';
import { PaisesVista2Component } from './paises-vista2/paises-vista2.component';
import { PaisesRoutingModule } from './paises-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    PaisesHomeComponent,
    PaisesVista1Component,
    PaisesVista2Component,
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class PaisesModule {}
