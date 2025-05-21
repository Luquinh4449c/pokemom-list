import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NgFor } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {

  pokemons: { name: string, image: string }[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons(50).subscribe((data) => {
      const requests = data.results.map((pokemon: any) =>
        this.pokemonService.getPokemon(pokemon.name)
      );

      forkJoin<any[]>(requests).subscribe((responses) => {
        this.pokemons = responses.map((details) => ({
          name: details.name,
          image: details.sprites.other['official-artwork'].front_default
        }));
      });
    });
  }

}
