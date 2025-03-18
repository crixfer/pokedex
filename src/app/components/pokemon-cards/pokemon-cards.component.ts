import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Result } from '../../interfaces/pokeApi';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-cards',
  imports: [CommonModule],
  templateUrl: './pokemon-cards.component.html',
  styleUrl: './pokemon-cards.component.scss',
})
export class PokemonCardsComponent implements OnChanges {
  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(): void {
    this.extractInfo();
  }
  @Input() data!: Result;
  @Input() chosen: boolean = false;
  @Output() clicked = new EventEmitter<string>();
  id: string = '0';

  //extracting the number from character 34 and on.
  extractInfo() {
    if (this.data) {
      this.id = this.data.url.substring(34, this.data.url.length - 1);
      this.pokemonService.getById(this.id);
    }
  }
}
