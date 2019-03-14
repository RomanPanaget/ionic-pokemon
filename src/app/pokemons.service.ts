import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";

import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PokemonsService {
  baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) {}

  getPokemon(name_or_id): Observable<Pokemon> {
    if (typeof name_or_id == "string") {
      name_or_id = name_or_id.toLowerCase();
    }
    return this.http.get<Pokemon>(this.baseUrl + name_or_id).pipe(
      tap(_ => console.log("Fetched pokemon " + name_or_id)),
      catchError(this.handleError("getPokemon", undefined))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
