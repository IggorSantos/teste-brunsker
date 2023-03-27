import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators'
import { Observable, EMPTY } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Imovel } from '../models/imovel.model';

@Injectable({
  providedIn: 'root'
})

export class ImovelService {
    baseUrl = "http://localhost:3000/imovel"

    constructor(private http: HttpClient){

    }

    getImovel(): Observable<Imovel[]>{
        return this.http.get<Imovel[]>(this.baseUrl)
    }

    getImovelById(id: number): Observable<Imovel>{
      const url = `${this.baseUrl}/${id}`
      return this.http.get<Imovel>(url)
    }

    createImovel(imovel: Imovel): Observable<Imovel>{
      return this.http.post<Imovel>(this.baseUrl, imovel)
    }

    updateImovel(id: number, imovel: Imovel): Observable<Imovel>{
      const url = `${this.baseUrl}/${id}`
      return this.http.put<Imovel>(url, imovel)
    }

    deleteImovel(id: number): Observable<Imovel>{
      const url = `${this.baseUrl}/${id}`
      return this.http.delete<Imovel>(url)
    }
}