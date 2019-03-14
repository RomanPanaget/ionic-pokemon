import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonCardComponent } from "./pokemon-card.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [PokemonCardComponent],
  exports: [PokemonCardComponent],
  imports: [CommonModule, IonicModule]
})
export class PokemonCardModule {}
