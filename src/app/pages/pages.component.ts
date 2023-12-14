import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  // ViewChild se utiliza para obtener una referencia a la instancia de MatSidenav
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  // Se inyecta BreakpointObserver para observar los cambios en el tamaño de la pantalla
  constructor(
    private observer: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {}
  ngAfterViewInit() {
    //
    this.observer.observe(['(max-width: 800px)']).subscribe((result) => {
      // Si el tamaño de la pantalla es menor o igual a 800px
      if (result.matches) {
        // Cambia el modo del sidenav a 'over' y lo cierra
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        /* Si el tamaño de la pantalla es mayor a 800px
        Cambia el modo del sidenav a 'side' y lo abre*/
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
      this.cd.detectChanges();
    });
  }
}
