import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private apiUrl = 'http://localhost:8080/formulario';

  constructor(private http: HttpClient) {}

  getFormularios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listaFormularios`)
      .pipe(
        catchError(this.handleError<any[]>('getFormularios', []))
      );
  }

  getFormularioById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addFormulario(formulario: { id: number, nome: string, idade: number }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/save`, formulario, { headers })
      .pipe(
        catchError(this.handleError<any>('addFormulario'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(`${operation} failed: ${error.message}`);
        return throwError(() => new Error(`${operation} failed: ${error.message}`));
      };
    }
}
