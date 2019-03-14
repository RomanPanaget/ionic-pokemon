import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SearchPokemonsPage } from "./search-pokemons.page";
import { PokemonCardModule } from "../pokemon-card/pokemon-card.module";

const routes: Routes = [
  {
    path: "",
    component: SearchPokemonsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PokemonCardModule
  ],
  declarations: [SearchPokemonsPage]
})
export class SearchPokemonsPageModule {}
