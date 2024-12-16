import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Errezeta } from '../../Interface/IErrezetak';
import { ErrezetakService } from '../../Service/errezetak.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from '../../pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatDividerModule, CommonModule, ImagenPipe,FormsModule,MatSnackBarModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

constructor(private errezetakService: ErrezetakService, private ActivatedRoute: ActivatedRoute, private snackBar: MatSnackBar, private router: Router) { }

errezeta: Errezeta = {
  osagaiak: '',
  deskribapena: '',
  argazkia: '',
  prezioa: '',
  id: ''
}



    guardar() {
      if (!this.errezeta.id) {
        console.log(this.errezeta);
        this.errezetakService.agregarErrezeta(this.errezeta).subscribe(resp => {
          this.errezeta = resp;
          this.errezetakService.getErrezetak();
          this.router.navigate(['/Errezeta/editar/' + this.errezeta.id]);
        })
      } else {
        this.errezetakService.actualizarErrezeta(this.errezeta).subscribe(resp => {
          this.errezeta = resp;
          this.errezetakService.getErrezetak();
        })
      }
      }


  borrar() {
    if (confirm("¿Está seguro de que quiere borrar el héroe?")) {
      if (this.errezeta.id) {
        this.errezetakService.borrarErrezeta(this.errezeta.id);
        alert('Héroe borrado correctamente');
        window.location.href = '/Errezeta/listado';
      } else {
        console.error('El ID del héroe no está definido');
      }
    } else {

      console.log('Operación de borrado cancelada');
    }

  }

getErrezeta(){
const Heroe = this.errezetakService.getErrezetaById(this.ActivatedRoute.snapshot.params[`id`]);
if (Heroe) {
  this.errezeta = Heroe;
}
return this.errezeta;

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
