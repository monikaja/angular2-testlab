import {Routes, RouterModule} from "@angular/router";
import {InicioComponent} from "./inicio.component";
import {ContactoComponent} from "./contacto.component";
import {NosotrosComponent} from "./nosotros.component";
import {EmpleadoComponent} from "./empleado.component";

const APP_ROUTES: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'empleado/:id', component: EmpleadoComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);