import { Injectable } from '@angular/core';
import { Result } from '../interfaces/pokeApi';
import { Pokemon } from '../interfaces/pokeInterface';

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

  async getById(id: string): Promise<Pokemon> {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await result.json();
  }

  async getDescription(id: string | number): Promise<string> {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    const resJson = await result.json();
    const texto = resJson.flavor_text_entries.find(
      (texto: any) => texto.language.name === 'es'
    );
    return texto.flavor_text;
  }
}
