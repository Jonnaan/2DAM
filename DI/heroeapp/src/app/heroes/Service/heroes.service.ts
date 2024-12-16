import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../Interface/IHeroes';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _heroes: Heroe[] = [];
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
	this.getHeroes();
  }

  getHeroes() {
    this.http.get<Heroe[]>(environment.baseUrl + '/heroes').subscribe({
      next: (data) => { this._heroes = data; },
      error: (err) => { console.error(err); },
      complete: () => { console.log(this._heroes); }
    });
    }

    get heroes() {
      return [...this._heroes];
      }

    getHeroeById(id: string) {
      return this._heroes.find(heroe => heroe.id === id);
    }

    getHeroesFilteredbyName (termino: string) {
   if (termino === '') {
      return this._heroes;
      }else {
      return this._heroes.filter(heroe => heroe.superhero.toLowerCase().includes(termino.toLowerCase()));
      }
    }

    // agregarHeroe(heroe: Heroe) {
    //   this.http.post<Heroe>(environment.baseUrl + '/heroes', heroe).subscribe({
    //     next: (data) => { this._heroes.push(data); },
    //     error: (err) => { console.error(err); },
    //     complete: () => { console.log(this._heroes);
    //     this.mostrarSnackBar('Héroe añadido correctamente');
    //      }
    //   });

    // }

    agregarHeroe(heroe: Heroe) {
      return this.http.post<Heroe>(environment.baseUrl + '/heroes', heroe);
      }

      actualizarHeroe(heroe: Heroe) {
      return this.http.put<Heroe>(environment.baseUrl + '/heroes/' + heroe.id, heroe);
      }

    editarHeroe(heroe: Heroe) {
      this.http.put<Heroe>(environment.baseUrl + '/heroes/' + heroe.id, heroe).subscribe({
        next: (data) => {
          const index = this._heroes.findIndex(h => h.id === heroe.id);
          this._heroes[index] = heroe;
          this.mostrarSnackBar('Héroe editado correctamente');
        },
        error: (err) => { console.error(err); },
        complete: () => { console.log(this._heroes); }
      });
    }
    borrarHeroe(id: string) {
      this.http.delete(environment.baseUrl + '/heroes/' + id).subscribe({
        next: () => {
          const index = this._heroes.findIndex(h => h.id === id);
          this._heroes.splice(index, 1);
          this.mostrarSnackBar('Héroe borrado correctamente');
        },
        error: (err) => { console.error(err); },
        complete: () => { console.log(this._heroes); }
      });
    }

    mostrarSnackBar(mensaje: string) {
      this.snackBar.open(mensaje, 'Cerrar', {
         duration: 2500
       });
     }


}
