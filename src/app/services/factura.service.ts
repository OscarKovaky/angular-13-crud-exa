import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { requestFacturaDto,FacturaDto } from '../models/factura.model';

const baseUrl = 'https://localhost:7183/Factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  findByIdUser(id: any): Observable<FacturaDto[]> {
    return this.http.get<FacturaDto[]>(`${baseUrl}/${id}`);
  }
}