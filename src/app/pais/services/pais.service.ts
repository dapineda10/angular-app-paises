import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private endpoint:string = "https://restcountries.com/v3.1";

  constructor(private http:HttpClient) { }
  
  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.endpoint}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.endpoint}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  ObtenerPaisPorCodigo(id:string):Observable<Country>{
    const url = `${this.endpoint}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
