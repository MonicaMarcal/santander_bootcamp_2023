import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

   //criando uma propriedade
   nome:string = 'Monica'

   constructor(){}

   //evento a ser disparado
   ngOnInit(): void {
     this.nome = `Olá ${this.nome}`
     console.log("Olá eu sou o nascimento do componente title")
   }

}
