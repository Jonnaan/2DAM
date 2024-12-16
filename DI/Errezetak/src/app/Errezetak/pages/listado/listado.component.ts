import { Component } from '@angular/core';
import { ErrezetakService } from '../../Service/errezetak.service';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { ErrezetaTarjetaComponent } from "../../components/errezeta-tarjeta/errezeta-tarjeta.component";




@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, MatDividerModule, ErrezetaTarjetaComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
    constructor(private errezetakService: ErrezetakService) {

    }


  get errezetak() {
    return this.errezetakService.errezetaCopia;
  }



}
