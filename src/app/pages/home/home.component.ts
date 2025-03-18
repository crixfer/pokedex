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

@Component({
  selector: 'app-home',
  imports: [PokemonPicturesComponent, PokemonCardsComponent, CommonModule],
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

  ngOnInit(): void {
    this.loadList();
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
}
