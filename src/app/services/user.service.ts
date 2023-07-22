import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaDto } from '../models/user.model';


const baseUrl = 'https://localhost:7183/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  findDetailByIdUser(identificacion: any): Observable<PersonaDto> {
    return this.http.get<PersonaDto>(`${baseUrl}?identificacion=${identificacion}`);
  }

  findListByIdUser(identificacion: any): Observable<PersonaDto[]> {
    return this.http.get<PersonaDto[]>(`${baseUrl}/${identificacion}`);
  }

  ListUser(): Observable<PersonaDto[]> {
    return this.http.get<PersonaDto[]>(baseUrl);
  }

  DeleteUser(identificacion: any): Observable<boolean> {
    return this.http.delete<boolean>(`${baseUrl}/${identificacion}`);
  }
}