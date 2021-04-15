import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2'

  constructor( private http: HttpClient ) { }

  buscarPais(termino: string, endPoint: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${endPoint}/${termino}`;
    return this.http.get<Country[]>( url );
  }

  getPisPorAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

}