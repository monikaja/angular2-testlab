import { Component} from '@angular/core';

@Component({
  selector: 'mi-aplicacion',
  template: `<ul>
      <li><a [routerLink]="['inicio']" routerLinkActive="active-link">Inicio</a></li>
      <li><a [routerLink]="['nosotros']" routerLinkActive="active-link">Nosotros</a></li>
      <li><a [routerLink]="['contacto']" routerLinkActive="active-link">Contacto</a></li>
  </ul><router-outlet></router-outlet>`
})

export class AppComponent  {
    // univ = "UPM";
    // mostrarEstudiante(evento:any):void{
    //     console.log(evento.nombre);
    // }

}
