import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Errezeta } from '../Interface/IErrezetak';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ErrezetakService {
  private _errezeta: Errezeta[] = [];

  constructor(private http: HttpClient) {
    this.getErrezetak();
  }

getErrezetak() {
  this.http.get<Errezeta[]>(environment.baseUrl+'errezetak').subscribe({
    next: (data) => { this._errezeta = data; },
    error: (err) => { console.error(err); },
    complete: () => { console.log(this._errezeta); }
  });

  }

  get errezetaCopia() {
    console.log(this._errezeta);
    return [...this._errezeta];
    }

    getErrezetaById(id: string) {
      return this._errezeta.find(errezeta => errezeta.id === id);
    }

    agregarErrezeta(errezeta: Errezeta) {
      return this.http.post<Errezeta>(environment.baseUrl+'errezetak', errezeta);
    }

    actualizarErrezeta(errezeta: Errezeta) {
      return this.http.put<Errezeta>(environment.baseUrl+'errezetak', errezeta);
    }

    borrarErrezeta(id: string) {
      return this.http.delete(environment.baseUrl+'errezetak/'+id);
    }

    getErrezetakFilteredbyName (termino: string) {
      if (termino === '') {
        return this._errezeta;
        }else {
        return this._errezeta.filter(errezeta => errezeta.deskribapena.toLowerCase().includes(termino.toLowerCase()));
        }
    }



}
