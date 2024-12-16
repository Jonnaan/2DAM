import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../Interface/IHeroes';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

	if (!heroe.id && !heroe.alt_img) {
  	return 'no-image.png';
	} else if (heroe.alt_img) {
  	return heroe.alt_img;
	} else {
  	return heroe.id + '.jpg';
	}
	}

}
