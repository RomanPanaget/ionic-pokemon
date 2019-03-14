import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { PokemonsPage } from "./pokemons.page";
import { PokemonCardModule } from "../pokemon-card/pokemon-card.module";

const routes: Routes = [
  {
    path: "",
    component: PokemonsPage
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
  declarations: [PokemonsPage]
})
export class PokemonsPageModule {}
