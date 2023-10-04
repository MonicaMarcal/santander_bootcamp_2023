import { Injectable } from '@angular/core'; //conteudo que pode ser injetado em outros componentes

@Injectable({
  providedIn: 'root' //pasta root do projeto
})
export class PokemonService {

  constructor( ) { }

  getPokemon(pokemonName:string) {
    console.log(pokemonName)
  }
}
