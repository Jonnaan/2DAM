import { Injectable } from '@angular/core';
import { Erabiltzaileak } from '../Interface/Erabiltzaileak';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _erabiltzailea: Erabiltzaileak | undefined;

  constructor(private http: HttpClient, private router: Router) { }
  login() {
	this.http.get<Erabiltzaileak>(environment.baseUrl + 'erabiltzailea/1').subscribe(
  	(erabiltzailea) => {
    	this._erabiltzailea = erabiltzailea;
    	console.log(this.erabiltzailea);
      localStorage.setItem('erabiltzailea', JSON.stringify(this.erabiltzailea));
    	this.router.navigate(['/errezeta/listado']);
  	});
  }

  get erabiltzailea() : Erabiltzaileak {
	return { ...this._erabiltzailea! };
  }

  verificaAutenticacion() {
    if (this._erabiltzailea) {
      return true;
    }
    else {
      this._erabiltzailea = JSON.parse(localStorage.getItem('erabiltzailea')!);
      if (this._erabiltzailea) {
        return true;
      }
      return false;
    }

    }

    logout() {
    this._erabiltzailea = undefined;
    localStorage.removeItem('erabiltzailea');
    this.router.navigate(['./errezetak']);
    }





}
