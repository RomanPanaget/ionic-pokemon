import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { PokemonsService } from "../pokemons.service";

@Component({
  selector: "app-search-pokemons",
  templateUrl: "./search-pokemons.page.html",
  styleUrls: ["./search-pokemons.page.scss"]
})
export class SearchPokemonsPage implements OnInit {
  constructor(private pokemonService: PokemonsService) {}

  pokemon: Pokemon;
  notFound: String;

  ngOnInit() {}

  searchPokemon(id_or_name): void {
    this.pokemonService.getPokemon(id_or_name).subscribe(pokemon => {
      console.log(pokemon);
      if (pokemon) {
        this.pokemon = pokemon;
        this.notFound = undefined;
      } else {
        this.pokemon = undefined;
        this.notFound = "Pokemon " + id_or_name + " not found";
      }
    });
  }
}
