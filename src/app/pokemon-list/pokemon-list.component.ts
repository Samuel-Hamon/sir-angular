import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  selectedPokemonId: number = 1;
  selectedPokemon: Pokemon | undefined;
  search: string = '';

  constructor(private pokeApiService: PokeApiService) { }

  // Récupère la liste des Pokémon via le service
  ngOnInit() {
    this.pokeApiService.getPokemonList().subscribe({
      next: (response) => {
        this.pokemons = response.results.map((poke: any, index: number) =>
          new Pokemon(index + 1, poke.name)
        );
      },
      error: (error) => {
        console.error("Erreur lors de la récupération des Pokémon", error);
      },
      complete: () => {
        console.log("La récupération des Pokémon est terminée");
      }
    });
  }

  // Méthode appelée lors du clic sur "Go !"
  validateSelection() {
    const selectedPokemon = this.getSelectedPokemon();
    if (selectedPokemon) {
      console.log("Le dresseur a choisi :", selectedPokemon.name);
      this.getPokemonDetails(selectedPokemon.id);
    } else {
      console.log("Aucun Pokémon sélectionné");
    }
  }

  // Récupère le Pokémon sélectionné
  getSelectedPokemon(): Pokemon | undefined {
    return this.pokemons[this.selectedPokemonId - 1];
  }

  // Récupère les détails d'un Pokémon
  getPokemonDetails(id: number) {
    this.pokeApiService.getPokemonDetails(id).subscribe({
      next: (details) => {
        const selectedPokemon = this.getSelectedPokemon();
        if (selectedPokemon) {
          selectedPokemon.setDetails(details);
          this.selectedPokemon = selectedPokemon;
          console.log("Détails du Pokémon:", selectedPokemon);
        }
      },
      error: (error) => {
        console.error("Erreur lors de la récupération des détails du Pokémon", error);
      },
      complete: () => {
        console.log("Récupération des détails terminée.");
      }
    });    
  }
}
