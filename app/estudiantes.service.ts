export class EstudiantesService{
    listaDeEstudiantes(universidad:string):Array<string>{
        if(universidad === "UAH"){
            return ['wwww','qqqq'];
        }
        return ['aaaa', 'bbbbb'];
    }
}
// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
//
// @Injectable()
// export class EstudiantesService {
//
//     constructor(private http: Http) { }
//
//     get estudiantes() {
//         return http.get(`https://jsonplaceholder.typicode.com/users/`)
//             .map(response => response.json());
//     }

    // constructor(private http: Http) { }
    //
    // get users() {
    //     return this.http.get(`https://jsonplaceholder.typicode.com/users/`)
    //         .map(response => response.json());
    // }

// }