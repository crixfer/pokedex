import { Component } from '@angular/core';
import { PokemonPicturesComponent } from '../../components/pokemon-pictures/pokemon-pictures.component';
import { PokemonCardsComponent } from '../../components/pokemon-cards/pokemon-cards.component';

@Component({
  selector: 'app-home',
  imports: [PokemonPicturesComponent, PokemonCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
