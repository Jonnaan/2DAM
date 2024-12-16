import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Errezeta } from '../Interface/IErrezetak';
import { environment } from '../../../environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ErrezetakService {
  private _errezeta: Errezeta[] = [];
  maxid: string = "1";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
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

    mostrarSnackBar(mensaje: string): void {
      this.snackBar.open(mensaje, 'Itxi', { duration: 2500 });
      }


      sortuID(): string {
        if (this._errezeta && this._errezeta.length > 0) {
          const maxNumericId = Math.max(...this._errezeta.map(errezeta => Number(errezeta.id) || 0)) + 1;
          this.maxid = maxNumericId.toString(); 
        } else {
          this.maxid = "1";
        }

        return this.maxid;
      }




}
