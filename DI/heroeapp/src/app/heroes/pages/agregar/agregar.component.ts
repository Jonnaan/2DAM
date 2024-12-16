import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ImagenPipe } from "../../pipes/imagen.pipe";
import { Heroe, Publisher } from '../../Interface/IHeroes';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { HeroesService } from '../../Service/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatDividerModule, CommonModule, ImagenPipe,FormsModule,MatSnackBarModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
constructor(private heroesService: HeroesService, private ActivatedRoute: ActivatedRoute, private snackBar: MatSnackBar, private router: Router) { }

heroe: Heroe = {
	superhero: '',
	alter_ego: '',
	characters: '',
	first_appearance: '',
	publisher: Publisher.DCComics,
	alt_img: ''
	}

  publishers: Publisher[] = Object.values(Publisher);





    guardar() {
      if (!this.heroe.id) {
        console.log(this.heroe);
        this.heroesService.agregarHeroe(this.heroe).subscribe(resp => {
          this.heroe = resp;
          this.heroesService.getHeroes();
          this.router.navigate(['/heroes/editar/' + this.heroe.id]);
        })
      } else {
        this.heroesService.actualizarHeroe(this.heroe).subscribe(resp => {
          this.heroe = resp;
          this.heroesService.getHeroes();
        })
      }
      }


  borrarHeroe() {
    if (confirm("¿Está seguro de que quiere borrar el héroe?")) {
      if (this.heroe.id) {
        this.heroesService.borrarHeroe(this.heroe.id);
        alert('Héroe borrado correctamente');
        window.location.href = '/heroes/listado';
      } else {
        console.error('El ID del héroe no está definido');
      }
    } else {

      console.log('Operación de borrado cancelada');
    }

  }

getheroe(){
const Heroe = this.heroesService.getHeroeById(this.ActivatedRoute.snapshot.params[`id`]);
if (Heroe) {
  this.heroe = Heroe;
}
return this.heroe;

}



}



  // guardar() {
  //   console.log(this.heroe);
  //  if (this.ActivatedRoute.snapshot.params[`id`]) {
  //   this.heroesService.editarHeroe(this.heroe);
  // }
  //   else {
  //     this.heroesService.agregarHeroe(this.heroe);
  //   }
  //   window.location.href = '/heroes/listado';

  //   }
