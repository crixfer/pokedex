import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PokemonPicturesComponent } from '../../components/pokemon-pictures/pokemon-pictures.component';
import { PokemonCardsComponent } from '../../components/pokemon-cards/pokemon-cards.component';
import { PokemonService } from '../../service/pokemon.service';
import { Result } from '../../interfaces/pokeApi';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../interfaces/pokeInterface';
import { PokemonDetailsComponent } from '../../components/pokemon-details/pokemon-details.component';

@Component({
  selector: 'app-home',
  imports: [
    PokemonPicturesComponent,
    PokemonCardsComponent,
    PokemonDetailsComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private pokemonService: PokemonService, private ngZone: NgZone) {}
  @ViewChild('cards') cardsElement!: ElementRef;

  pokemonList: Result[] = [];

  page: number = 1;

  loading: boolean = false;

  debouncerTimer: any;

  chosenPokemon?: Pokemon;

  ngOnInit(): void {
    this.loadList();
    this.pokemonService.getById('1');
  }

  async loadList() {
    if (this.loading) return;
    this.loading = true;
    this.pokemonList = [
      ...this.pokemonList,
      ...(await this.pokemonService.getByPage(this.page)),
    ];
    console.log(this.pokemonList);
    this.page++;
    this.loading = false;
  }

  onScroll(e: any) {
    console.log(e);
    clearTimeout(this.debouncerTimer);

    this.debouncerTimer = setTimeout(() => {
      this.ngZone.run(() => {
        if (
          Math.round(
            this.cardsElement.nativeElement.clientHeight +
              this.cardsElement.nativeElement.scrollTop
          ) >= this.cardsElement.nativeElement.scrollHeight
        ) {
          this.loadList();
        }
      });
    }, 300);
  }

  async clickedCard(id: string) {
    this.chosenPokemon = await this.pokemonService.getById(id);
  }
}
