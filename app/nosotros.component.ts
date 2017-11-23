import {Component, OnInit} from "@angular/core";
import {EmpleadosService} from "./empleados.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/templates/nosotros.component.html'
})

export class NosotrosComponent implements OnInit{
    empleados:Array<object>;

    constructor(private empleadoService:EmpleadosService, private router:Router){}

    listadeempleados(){
        this.empleadoService.listUsers()
            .then(respuesta=> this.empleados = respuesta)
    }

    getDetalle(empleado:any){
        this.router.navigate(['empleado', empleado.id]);
    }

    ngOnInit(){
        this.listadeempleados();
    }
}