import { Injectable } from '@angular/core';
import { Result } from '../interfaces/pokeApi';
import id from '@angular/common/locales/id';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  async getByPage(page: number, size: number = 40): Promise<Result[]> {
    if (page > 5) return [];
    const offset = size * (page - 1);
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`
    );
    const resJson = await result.json();
    if (resJson.results.length > 0) return resJson.results;
    return [];
  }

  async getById(id: string) {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const resJson = await result.json();
    console.log(resJson);
  }

  getDescription() {}
}
