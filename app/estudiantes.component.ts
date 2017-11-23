import {Component, Input, Output, EventEmitter} from "@angular/core";
import {EstudiantesService} from "./estudiantes.service";

@Component({
    selector: 'estudiantes',
    templateUrl: 'app/templates/estudiantes.html',
    providers: [EstudiantesService]
})

export class EstudiantesComponent {
    @Input() universidad:string;
    @Output() seleccionado = new EventEmitter();

    titulo = "Hola que tal";
    // estudiantes = ["pedro","ana","pepito"];
    estudiantes: string[];
    // redondeadas = true;
    // imgUrl = "http://www.futurama-latino.com/wp-content/uploads/2016/10/Futurama-temporadas-completas.jpg";
    // status = 'ok';

    constructor(estudiantesService:EstudiantesService){
        this.estudiantes = estudiantesService.listaDeEstudiantes("UAH");
    }

    prueba(event:any){

        this.titulo='ey';
        console.log(event);
    }

    clickEnEstudiante(event:any):void{
        this.seleccionado.emit({nombre: event.target.textContent});
    }
}