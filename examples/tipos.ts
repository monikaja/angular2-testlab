//string
let nombre:string = "hola";

//number
let edad:number = 2;

//boolean
let soltero:boolean=true;

//Array
let frutas: Array<string> = ["pera", "manzana"];
let frutas2: string[] = ["pera", "manzana"];

//Enums
enum Ejemplo {rojo, azul, amarillo, verde, negro}
let color : Ejemplo = Ejemplo.amarillo;

//Any
let cualquiera:any;
cualquiera = 10;
cualquiera = "hola";
cualquiera = [];

//Void
function example(data:string):void{
    console.log(data);
}
