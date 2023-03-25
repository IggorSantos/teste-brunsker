import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators'
import { Observable, EMPTY } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Imovel } from '../models/imovel.model';

@Injectable({
  providedIn: 'root'
})

export class ImovelService {
    baseUrl = "http://localhost:5875/imovel"

    constructor(private http: HttpClient){

    }

    getImovel(): Observable<Imovel[]>{
        return this.http.get<Imovel[]>(this.baseUrl)
    }

    createImovel(imovel: Imovel): Observable<Imovel>{
      return this.http.post<Imovel>(this.baseUrl, imovel)
    }

    updateImovel(imovel: Imovel): Observable<Imovel>{
      const url = `${this.baseUrl}/${imovel.id}`
      return this.http.put<Imovel>(url, imovel)
    }

    deleteImovel(id: string): Observable<Imovel>{
      const url = `${this.baseUrl}/${id}`
      return this.http.delete<Imovel>(url)
    }
}