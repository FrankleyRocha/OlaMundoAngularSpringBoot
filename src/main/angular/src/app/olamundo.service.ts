import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OlamundoService {

  constructor(private http: HttpClient) { }

  getOla(nome : String) {
    let basePath = 'http://localhost:8080';
    return this.http.get<String>(`${basePath}/api/ola?nome=${nome}`);
  }

}
