import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { PokemonDetailPage } from "./pokemon-detail.page";
import { FirstLetterCapitalizedPipe } from "../first-letter-capitalized.pipe";

const routes: Routes = [
  {
    path: "",
    component: PokemonDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PokemonDetailPage, FirstLetterCapitalizedPipe]
})
export class PokemonDetailPageModule {}
