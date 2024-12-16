import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeTarjetaComponent } from '../../components/heroe-tarjeta/heroe-tarjeta.component';
import { MatDividerModule } from '@angular/material/divider';
import { HeroesService } from '../../Service/heroes.service';

@Component({
  selector: 'app-listado',
  imports: [CommonModule,MatDividerModule,HeroeTarjetaComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  constructor(private heroesService: HeroesService) { }

  get heroes() {
	return this.heroesService.heroes;
  }

}
