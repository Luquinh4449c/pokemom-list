import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

 private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  // Lista os primeiros 20 pokémons
  getPokemons(limit: number = 20, offset: number = 0): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  // Busca os detalhes de um pokémon pelo nome ou id
  getPokemon(nomeOuId: string | number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${nomeOuId}`);
  }

}
