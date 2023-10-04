import { Injectable } from '@angular/core'; //conteudo que pode ser injetado em outros componentes
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' //pasta root do projeto
})
export class PokemonService {
  private baseURL:string = ""

  constructor( ) {
    this.baseURL  = environment.pokeApi
   }

  getPokemon(pokemonName:string) {
    console.log(pokemonName)
  }
}
