import { Component} from '@angular/core';
// import {NgForm} from '@angular/forms';//formularios implicitos
import {FormControl, FormGroup, Validators} from '@angular/forms';//formularios explicitos

@Component({
    selector: 'mi-formulario',
    // templateUrl: 'app/templates/formulario.component.html'
    templateUrl: 'app/templates/formulario-explicito.component.html'
})

export class FormularioComponent  {
    formulario:FormGroup;

    constructor(){
        this.formulario = new FormGroup({
            nombre: new FormControl('', Validators.required),
            correo: new FormControl('', [Validators.required, this.elCorreoYaExiste, Validators.pattern("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+$")])
        });
    }

    enviar(){
        console.log(this.formulario);
    }

    elCorreoYaExiste(control:FormControl):{[s:string]:Boolean}{
        let correos: string[] = ['aaa@gmail.com','bbb@gmail.com'];

        if(correos.indexOf(control.value)!=-1){
            return {elCorreoYaExiste : true};
        }

        return null;
    }
}
