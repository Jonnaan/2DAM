import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Errezeta } from '../../Interface/IErrezetak';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-confirmar-agregar',
  imports: [MatButton, MatDialogModule],
  templateUrl: './confirmar-agregar.component.html',
  styleUrl: './confirmar-agregar.component.css'
})
export class ConfirmarAgregarComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmarAgregarComponent>, @Inject(MAT_DIALOG_DATA) public data: Errezeta) { }

  borrar(){
	this.dialogRef.close(true);
  }
  cerrar(){
	this.dialogRef.close();
  }

}
