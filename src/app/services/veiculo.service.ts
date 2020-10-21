import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../common/veiculo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private baseUrl: string ;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:8080/sin/systst-analise-risco/rest/veiculo/findAll';
  }

  findAll(): Observable<Veiculo[]> {
    return this.httpClient.get<Veiculo[]>(this.baseUrl);
  }
}
