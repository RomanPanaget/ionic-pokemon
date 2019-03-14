import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { PokemonsService } from "../pokemons.service";

@Component({
  selector: "app-pokemons",
  templateUrl: "./pokemons.page.html",
  styleUrls: ["./pokemons.page.scss"]
})
export class PokemonsPage implements OnInit {
  pokemons = [];

  pokemon: Pokemon;

  showOptions = false;

  constructor(private pokemonService: PokemonsService) {}

  ngOnInit() {
    this.getPokemons(1, 9);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  refreshPokemons(initialId, amount): void {
    this.pokemons = [];
    this.getPokemons(parseInt(initialId), parseInt(amount));
  }

  getPokemons(initialId, amount): void {
    this.pokemonService.getPokemon(initialId).subscribe(pokemon => {
      this.pokemons.push(pokemon);
      if (amount > 1) {
        this.getPokemons(initialId + 1, amount - 1);
      }
    });
  }

  getPokemon(id): void {
    this.pokemonService
      .getPokemon(id)
      .subscribe(pokemon => this.pokemons.push(pokemon));
  }
}
