import { Injectable } from '@angular/core';
import { Result } from '../interfaces/pokeApi';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  async getByPage(): Promise<Result> {
    const result = fetch(
      'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'
    );
    const resJson = (await result).json;
    console.log(resJson);
  }

  getById() {}

  getDescription() {}
}
