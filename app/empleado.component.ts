import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {EmpleadosService} from "./empleados.service";

@Component({
    template: `<div *ngIf="empleado">{{empleado.name}}</div>`
})

export class EmpleadoComponent implements OnInit{
    empleado:object;

    constructor(private route:ActivatedRoute, private service:EmpleadosService){

    }

    ngOnInit(){
        let id= +this.route.snapshot.params['id'];
        this.service.getDetail(id)
            .then(respuesta=> this.empleado = respuesta)
    }
}