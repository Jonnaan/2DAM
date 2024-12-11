import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { Auth } from '../interface/IUsuario';
import { J } from '@angular/cdk/keycodes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private _auth: Auth | undefined;

  constructor(private http: HttpClient, private router:Router) {   }

  login() {
    this.http.get<Auth>(environment.baseUrl + '/usuarios/1').subscribe(
    (auth) => {
      this._auth = auth;
      console.log(this.auth);
      localStorage.setItem('auth', JSON.stringify(this._auth));
      this.router.navigate(['./heroes']);
    });}


    get auth() : Auth {
      return { ...this._auth! };
      }

    verificaAutenticacion() {
      if (this._auth) {
        return true;
      }
      else{
        this._auth = JSON.parse(localStorage.getItem('auth')!);
        if (this._auth) {
          return true;
        }
        return false;
      }
    }

    logout() {
      this._auth = undefined;
      localStorage.removeItem('auth');
      this.router.navigate(['./auth']);
    }






}
