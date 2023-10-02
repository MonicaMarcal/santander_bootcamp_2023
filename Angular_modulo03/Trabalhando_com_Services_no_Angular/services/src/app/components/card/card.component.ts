import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
[x: string]: any;
  name:string = "Pikachu"
  attributeTypes: string[] = ['raio, trovao']

  constructor(){}
  ngOnInit(): void {
  }

}
