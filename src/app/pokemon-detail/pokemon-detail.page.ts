import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonsService } from "../pokemons.service";
import { Pokemon } from "../pokemon";
@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.page.html",
  styleUrls: ["./pokemon-detail.page.scss"]
})
export class PokemonDetailPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonsService
  ) {}

  pokemon: Pokemon;
  sprites = [];

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.pokemonService.getPokemon(id).subscribe(pokemon => {
      this.pokemon = pokemon;
      this.sprites = Object.keys(pokemon.sprites)
        .map(key => pokemon.sprites[key])
        .filter(sprite => sprite);
    });
  }
}
