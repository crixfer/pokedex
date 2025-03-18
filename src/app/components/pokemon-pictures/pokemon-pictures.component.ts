import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokeInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-pictures',
  imports: [CommonModule],
  templateUrl: './pokemon-pictures.component.html',
  styleUrl: './pokemon-pictures.component.scss',
})
export class PokemonPicturesComponent {
  @Input() pokemon?: Pokemon;
}
