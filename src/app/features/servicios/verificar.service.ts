import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificarService {
  url: string; 

  constructor(private http: HttpClient) {
    this.url=`${environment.urlBase}verificar`
  }
  verificarFecha(year: number, month: number, day: number): Observable<string> {
    return this.http.get(`${this.url}/${year}/${month}/${day}`, {
      responseType: 'text', 
    });
  }
  
}
