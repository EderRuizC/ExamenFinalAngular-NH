import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurso } from 'src/app/shared/Interfaces/Course';

@Injectable({
  providedIn: 'root'
})
export class CursodestacadoService {

  url= 'http://examen-nh.jcramireztello.com/api/v1/course/?featured=true';

  constructor(private http: HttpClient ) { 

  }

  getinstructor() {
    return this.http.get<ICurso[]>(`${this.url}`);
  }

}
