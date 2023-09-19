import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
    buttonText: string = 'ACESSAR';
    buttonTexts: string[] = ['VENDER', 'COMPRAR'];
    buttonNumber: number = 1;
    buttonObject = {
        label: 'adicionar ao carrinho',
    };
}