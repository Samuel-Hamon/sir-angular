import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des Pokémon
  getPokemonList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Méthode pour récupérer les détails d'un Pokémon spécifique
  getPokemonDetails(id: number): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get<any>(url);
  }
}
