import { Component, Input, OnChanges } from '@angular/core';
import { PokemonCardsComponent } from '../pokemon-cards/pokemon-cards.component';
import { Pokemon } from '../../interfaces/pokeInterface';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  imports: [PokemonCardsComponent, CommonModule],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent implements OnChanges {
  @Input() pokemon?: Pokemon;
  description: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(): void {
    if (this.pokemon) {
      this.pokemonService.getDescription(this.pokemon?.id).then((res) => {
        this.description = res;
      });
    }
  }
}
