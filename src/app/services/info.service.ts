import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  //Inyeccion de dependencias
  constructor(private http:HttpClient) {

  }

  baseURI = "https://my-json-server.typicode.com/Joanutsu/SNK-JSON/SNK"

  obtenerInfo():Observable<any>{
    return this.http.get(this.baseURI)
                      .pipe(
                        catchError( e => {
                          /*Logica para el error*/
                          return throwError(e)
                        })
                      )
  }

   obtenerDetalles(id: string): Observable<any> {
      return this.http.get(`${this.baseURI}/${id}`)
         .pipe(
            catchError(e => {
            /*Logica para el error*/
            return throwError(e);
         })
      );
   }


}
