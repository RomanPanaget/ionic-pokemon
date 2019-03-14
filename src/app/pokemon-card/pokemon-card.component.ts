import { Component, OnInit, Input } from "@angular/core";
import { Pokemon } from "src/app/pokemon";

import { Router } from "@angular/router";

@Component({
  selector: "pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.scss"]
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor(private router: Router) {}

  ngOnInit() {}

  detail() {
    this.router.navigate(["/pokemon-detail", this.pokemon.id]);
  }
}
