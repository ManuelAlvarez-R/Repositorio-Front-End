import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tablaFestivosDto } from '../../core/entidades/tablaFestivosDto';
import { environment } from '../../../enviroments/environment';

@Injectable({
  providedIn: 'root' 
})
export class ListarporyearService {
  url: string; 

  constructor(private http: HttpClient) {
    this.url=`${environment.urlBase}obtener`
  }

  listarporyear(year: number): Observable<tablaFestivosDto[]> {
    return this.http.get<tablaFestivosDto[]>(`${this.url}/${year}`);
  }
}
