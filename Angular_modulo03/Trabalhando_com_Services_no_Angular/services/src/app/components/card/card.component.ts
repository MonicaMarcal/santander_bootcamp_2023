import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  name:string = "Pikachu"
  attributeTypes: string[] = ['raio, trovao']

  constructor(
    private service:PokemonService
  ){}

  ngOnInit(): void {
    this.service.getPokemon('pikachu').subscribe(
      {
        next:(res) => console.log(res),
        error:(err) => console.log(err)
      }
    )
  }

}
