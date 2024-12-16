import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Errezeta } from '../../Interface/IErrezetak';
import { ImagenPipe } from '../../pipes/imagen.pipe';

@Component({
  selector: 'app-errezeta-tarjeta',
  imports: [MatCardModule, MatButtonModule,ImagenPipe, RouterLink],
  templateUrl: './errezeta-tarjeta.component.html',
  styleUrl: './errezeta-tarjeta.component.css'
})
export class ErrezetaTarjetaComponent {
  @Input() Errezeta!: Errezeta;
}
