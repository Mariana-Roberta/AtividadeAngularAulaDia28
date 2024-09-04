import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiUrl = 'http://localhost:8080/pessoa';

  constructor(private http: HttpClient) {}

  getPessoas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listagem`)
      .pipe(
        catchError(this.handleError<any[]>('getPessoas', []))
      );
  }

  getPessoaById(id: number): Observable<any> {
     return this.http.get<any>(`${this.apiUrl}/id/${id}`).pipe(
        catchError(this.handleError<any>('getPessoaById', null)) // Retorna null em vez de um array vazio
      );
  }

  addPessoa(pessoa: { id: number, nome: string, idade: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, pessoa)
      .pipe(
        catchError((error) => {
          console.error('Error occurred:', error);
          return throwError(error);
        })
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(`${operation} failed: ${error.message}`);
        return throwError(() => new Error(`${operation} failed: ${error.message}`));
      };
    }
}
