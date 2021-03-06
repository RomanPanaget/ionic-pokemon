import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "signin",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule"
  },
  {
    path: "signin",
    loadChildren: "./signin/signin.module#SigninPageModule"
  },
  {
    path: "pokemons",
    loadChildren: "./pokemons/pokemons.module#PokemonsPageModule"
  },
  {
    path: "search-pokemons",
    loadChildren:
      "./search-pokemons/search-pokemons.module#SearchPokemonsPageModule"
  },
  {
    path: "pokemon-detail/:id",
    loadChildren:
      "./pokemon-detail/pokemon-detail.module#PokemonDetailPageModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
