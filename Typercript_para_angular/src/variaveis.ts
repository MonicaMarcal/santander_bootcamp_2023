/**
 * VARIAVEIS
*/

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "felipe";
let idade: number = 30;    //inteiro
let altura: number = 1.9;  //decimal

// tipos especiais null, undefined
let nulo: null = null;                  //um valor vazio ou um valor em branco.
let indefinido: undefined = undefined;  //variável foi declarada, mas seu valor não foi atribuído

//tipos abrangentes: any, void
let retorno: void;            //void = vazio, não retorna nada
let retornoView: any = false; //aceita qualquer coisa

//________________________________________________________________________________________//

//objeto - sem previsibilidade
let produto: object = {
    name: "felipe",
    cidade: "sp",
    idade: 30,
  };
  
  //objeto tipado - com previsibilidade
  type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
  };
  
  let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
  };

//________________________________________________________________________________________//

/**
 * ARRAYS
*/

let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

let infos: (string | number)[] = [322, "felipe"]; //array de multi types

//________________________________________________________________________________________//

/**
 * TUPLAS //vetor/array de multi types que segue a ordem de definição da variavel
 */
let boleto: [string, number, number] = ["agua conta", 199.9, 32342342];

//________________________________________________________________________________________//

/**
 * arrays métodos (tem acesso para utilizar os mesmos métodos do Javascript)
 */
//EX:
dados.pop();

//________________________________________________________________________________________//

/**
 * DATAS
 */
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());

//________________________________________________________________________________________//
