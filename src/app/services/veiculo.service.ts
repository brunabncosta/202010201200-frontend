import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../common/veiculo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private baseUrl='http://localhost:8080/sin/systst-analise-risco/rest/veiculo/findAll'

  constructor(private httpClient: HttpClient) {}

  getAllVeiculosList(): Observable<Veiculo[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.veiculo)
    );
  }
}

interface GetResponse {
    veiculo: Veiculo[];
}
