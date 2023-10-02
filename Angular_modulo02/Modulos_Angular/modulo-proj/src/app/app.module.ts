import { NgModule } from '@angular/core';//modulos do angular
import { BrowserModule } from '@angular/platform-browser';//navegador
import { ListaModule } from './lista/lista.module'

import { AppRoutingModule } from './app-routing.module'; //roteamento do angular
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //todos os componentes criados
    AppComponent
  ],
  imports: [ //importar outros modules
    BrowserModule,
    AppRoutingModule,
    ListaModule
  ],
  exports:[], //fornece para outros modules partes especificas de um module
  providers: [], //associar provedores de dados(como o banco de dados)
  bootstrap: [AppComponent] //inicialização, quais são nossos componentes iniciais
})
export class AppModule { }
