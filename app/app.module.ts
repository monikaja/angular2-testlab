import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//formularios implicitos
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";//formularios explicitos

//Componentes creados
import { AppComponent }  from './app.component';
import {EstudiantesComponent} from "./estudiantes.component";
import {FormularioComponent} from "./formulario.component";
import { EmpleadoComponent} from "./empleado.component";

import {InicioComponent} from "./inicio.component";
import {ContactoComponent} from "./contacto.component";
import {NosotrosComponent} from "./nosotros.component";

import {EmpleadosService} from "./empleados.service";

import {routing} from "./app.routing";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, ReactiveFormsModule, routing ],
  declarations: [ AppComponent , EstudiantesComponent, FormularioComponent,
                    InicioComponent, ContactoComponent, NosotrosComponent, EmpleadoComponent],
  bootstrap:    [ AppComponent ],
  providers: [ EmpleadosService]
})
export class AppModule { }
