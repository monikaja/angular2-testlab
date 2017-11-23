class Persona{
    public nombre: string;
    private apellido: string;
    edad: number;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

    }

    saludar():void{
        console.log("Hola "+this.nombre + " "+this.apellido);
    }
}

let estudiante:Persona = new Persona("Pepe", "Lopez", 23);
estudiante.saludar();

