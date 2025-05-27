import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NgFor, CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  selectedPokemon: any = null;
  filtro: string = '';
  modalVisible = false;
  isModalOpen = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons(50).subscribe((data) => {
      const requests = data.results.map((pokemon: any) =>
        this.pokemonService.getPokemon(pokemon.name)
      );

      forkJoin<any[]>(requests).subscribe((responses) => {
        this.pokemons = responses.map((details) => ({
          name: details.name,
          image: details.sprites.other['official-artwork'].front_default,
          id: details.id,
          types: details.types.map((t: any) => t.type.name),
          height: details.height,
          weight: details.weight,
          stats: details.stats
        }));
      });
    });
  }

  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon;
    this.modalVisible = true;

    // Delay para aplicar animação da Pokébola abrindo
    setTimeout(() => {
      this.isModalOpen = true;
    }, 10);
  }

  closeModal() {
    this.isModalOpen = false; // animação fechando

    setTimeout(() => {
      this.modalVisible = false;
      this.selectedPokemon = null;
    }, 500); // esperar animação terminar
  }

 get pokemonsFiltrados() {
  return this.pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(this.filtro.toLowerCase())
  );
}

}
