import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  implements OnInit{

  produtos:string[] = []
  /* menuType:string = ""  *///sem especificação cai no usuario padrão ou com especificação 'admin' ou 'superuser'
  menuType:string = "admin"
 /*  menuType:string = "superuser"  */

  constructor(){
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"
    ]
  }

  ngOnInit(): void {
  }

  adicionar(){
    /* this.produtos.pop() */ //remove
    this.produtos.push("monica") //adiciona
  }

  remover(index:number){
    this.produtos.splice(index, 1)//remove 1 elemento do index
    /* alert(index) */
  }
}
