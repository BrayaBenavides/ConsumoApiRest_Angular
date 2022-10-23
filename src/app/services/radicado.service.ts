import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Radicado } from 'models/Radicado.model';

@Injectable({
  providedIn: 'root'
})
export class RadicadoService {
  constructor(
    private http: HttpClient
  ) {
    console.log('servicio Radicado');
  }

  getAllRadicado(): any {
    return this.http.get('https://localhost:7262/api/Importar')
    .subscribe(data => {
      console.log(data)
    });
  }
}
