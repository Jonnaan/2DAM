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
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { ConfirmarAgregarComponent } from '../../components/confirmar-agregar/confirmar-agregar.component';
import { ConfirmarEditarComponent } from '../../components/confirmar-editar/confirmar-editar.component';

@Component({
  selector: 'app-agregar',
  imports: [MatCardModule,MatDialogModule ,MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatDividerModule, CommonModule, ImagenPipe,FormsModule,MatSnackBarModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

constructor(
  private errezetakService: ErrezetakService,
  private ActivatedRoute: ActivatedRoute,
  private snackBar: MatSnackBar,
  private router: Router,
  private dialog: MatDialog) { }

errezeta: Errezeta = {
  osagaiak: '',
  deskribapena: '',
  argazkia: '',
  prezioa: '',
  id: undefined
}

getErrezeta(){
  const Errezeta = this.errezetakService.getErrezetaById(this.ActivatedRoute.snapshot.params[`id`]);
  if (Errezeta) {
    this.errezeta = Errezeta;
  }
  return this.errezeta;
  }

    guardar() {
      if (!this.errezeta.id) {
        this.errezeta.id = this.errezetakService.sortuID();
        console.log(this.errezeta);
        const dialog = this.dialog.open(ConfirmarAgregarComponent, {
          width: '250px',
          data: this.errezeta
        });
        dialog.afterClosed().subscribe(
          (result) => {
            console.log(result);
            if (result) {
                this.errezetakService.agregarErrezeta(this.errezeta).subscribe(resp => {
                  this.errezeta = resp;
                  this.errezetakService.getErrezetak();
                })
                this.errezetakService.mostrarSnackBar('Errezeta gehitu da');
                this.router.navigate(['/errezeta']);
              } else {
                this.errezetakService.mostrarSnackBar('Errezeta ez da gehitu');
              }})
      } else if (this.errezeta ) {
            const dialog = this.dialog.open(ConfirmarEditarComponent, {
              width: '250px',
              data: this.errezeta
            });
            dialog.afterClosed().subscribe(
              (result) => {
                console.log(result);
                if (result) {
            this.errezetakService.actualizarErrezeta(this.errezeta).subscribe(resp => {
              this.errezeta = resp;
              this.errezetakService.getErrezetak();
            })
              this.errezetakService.mostrarSnackBar('Errezeta eguneratu da');
              this.router.navigate(['/errezeta']);
            }})
      }
    }


  borrar() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.errezeta
    });
    dialog.afterClosed().subscribe(
      (result) => {
        console.log(result);
        if (result) {
          this.errezetakService.borrarErrezeta(this.errezeta.id!).subscribe(resp => {
            this.errezetakService.mostrarSnackBar('Registroa ezabatu da');
            this.errezetakService.getErrezetak();
            this.router.navigate(['/errezeta']);
          })
        }
      }
    )
    }








}

