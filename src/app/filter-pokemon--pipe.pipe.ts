import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe',
  standalone: false
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(pokes: any[], property: string, searchString: string): any[] {
    if (!searchString) {
      return pokes;
    }

    return pokes.filter(poke => 
      poke[property]?.toLowerCase().includes(searchString.toLowerCase())
    );
  }
}
