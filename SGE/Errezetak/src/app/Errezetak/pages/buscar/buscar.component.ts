import { Component } from '@angular/core';
import { ErrezetakService } from '../../Service/errezetak.service';
import { Errezeta } from '../../Interface/IErrezetak';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrezetaTarjetaComponent } from "../../components/errezeta-tarjeta/errezeta-tarjeta.component";

@Component({
  selector: 'app-buscar',
  imports: [MatFormFieldModule, MatInputModule, MatAutocompleteModule, FormsModule, CommonModule, MatCardModule, ErrezetaTarjetaComponent],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  constructor(private errezetakService: ErrezetakService) {

  }
  termino: string = '';
  errezeta: Errezeta | undefined;
  errezetaFiltrados: Errezeta[] = [];

  buscar() {
  if (this.termino === '') {
    this.errezetaFiltrados = this.errezetakService.errezetaCopia;
  } else {
    this.errezetaFiltrados = this.errezetakService.getErrezetakFilteredbyName(this.termino);
  }
  }

  optionSelected(errezeta: Errezeta) {
    this.errezeta = errezeta;
    this.termino = errezeta.deskribapena;
  }
  ngOninit() {
    this.errezetaFiltrados = this.errezetakService.errezetaCopia;

  }



}
