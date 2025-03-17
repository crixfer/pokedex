import { Component, OnInit } from '@angular/core';
import { PokemonPicturesComponent } from '../../components/pokemon-pictures/pokemon-pictures.component';
import { PokemonCardsComponent } from '../../components/pokemon-cards/pokemon-cards.component';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-home',
  imports: [PokemonPicturesComponent, PokemonCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  pokemonList = [];

  ngOnInit(): void {
    this.pokemonService.getByPage();
  }

  async loadList() {
    this.pokemonList = [
      ...this.pokemonList,
      ...(await this.pokemonService.getByPage()),
    ];
  }
}
