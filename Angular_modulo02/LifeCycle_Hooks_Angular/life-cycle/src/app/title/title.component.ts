import { Component, Input,OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

   //inputando
   @Input() nome:string = ''

   constructor(){"construtor"}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges")
    console.log( `OnChanges ${this.nome}`)

  }

   //evento a ser disparado
   ngOnInit(): void {
     console.log("OnInit")
     console.log( `OnInit ${this.nome}`)
/*      this.nome = `Olá ${this.nome}`
     console.log("Olá eu sou o nascimento do componente title") */
   }

}
