import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise'

@Injectable()
export class EmpleadosService{
    constructor(private http:Http){}

    listUsers(){
        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .toPromise()
            .then( respuesta => respuesta.json())
            .catch(this.manageError)
    }

    getDetail(id:number){
        return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
            .toPromise()
            .then( respuesta => respuesta.json())
            .catch(this.manageError)
    }

    private manageError(error:any){
       console.log("Error "+error, error);
       return Promise.reject(error);
    }
}