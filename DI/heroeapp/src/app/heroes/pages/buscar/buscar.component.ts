import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { HeroesService } from '../../Service/heroes.service';
import { Heroe } from '../../Interface/IHeroes';
import { MatCardModule } from '@angular/material/card';
import { HeroeTarjetaComponent } from '../../components/heroe-tarjeta/heroe-tarjeta.component';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatAutocompleteModule, FormsModule, CommonModule, MatCardModule, HeroeTarjetaComponent],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  constructor(private heroesService: HeroesService) {
  }
  termino: string = '';
  heroe: Heroe | undefined;
  heroesFiltrados: Heroe[] = [];

  buscar() {
    this.heroesFiltrados = this.heroesService.getHeroesFilteredbyName(this.termino);
  }

  optionSelected(heroe: Heroe) {
    this.heroe = heroe;
    this.termino = heroe.superhero;
  }
  ngOninit() {
    this.heroesFiltrados = this.heroesService.heroes;

  }



}
