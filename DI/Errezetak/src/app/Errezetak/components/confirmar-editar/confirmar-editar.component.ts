import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Errezeta } from '../../Interface/IErrezetak';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-confirmar-editar',
  imports: [MatButton, MatDialogModule],
  templateUrl: './confirmar-editar.component.html',
  styleUrl: './confirmar-editar.component.css'
})
export class ConfirmarEditarComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmarEditarComponent>, @Inject(MAT_DIALOG_DATA) public data: Errezeta) { }

  borrar(){
	this.dialogRef.close(true);
  }
  cerrar(){
	this.dialogRef.close();
  }

}
