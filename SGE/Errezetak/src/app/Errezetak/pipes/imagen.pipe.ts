import { Pipe, PipeTransform } from '@angular/core';
import { Errezeta } from '../Interface/IErrezetak';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(errezeta: Errezeta): string {

	if (!errezeta.id && !errezeta.argazkia) {
  	return 'no-image.png';
	} else if (errezeta.argazkia) {
  	return errezeta.argazkia;
	} else {
  	return errezeta.id + '.jpg';
	}
	}

}
