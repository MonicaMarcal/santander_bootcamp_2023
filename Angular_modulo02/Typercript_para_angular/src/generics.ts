//GENERICS -> algo que não é especifico, igual ao remedio de farmacia,
//você quer um remedio especifico, mais ele não tem então você aceita um generico dele.

//SEM GENERICS -> essa função pode retornar qualquer coisa para especificar o que queremos que retorne utilizamos os generics
//funcao que junta varias arrays 
/* function concatArray(...itens: any[]): any[] {
    return new Array().concat(...itens);
  }
  
  const numArray = concatArray([1, 5], [3]);
  const stgArray = concatArray(["felipe", "goku"], ["vegeta"]);
  
  console.log(numArray);
  console.log(stgArray); */

//COM GENERICS -> Especificando o tipo de retorno que queremos de forma dinamica(generica)
function concatArray<T>(...itens: T[]): T[] { //especificando que en vez de ANY será um tipo especifico <T>
    return new Array().concat(...itens);
  }
  
  const numArray = concatArray<number[]>([1, 5], [3]); //tipo de retorno que terá = <number[]>
  const stgArray = concatArray<string[]>(["felipe", "goku"], ["vegeta"]);  //tipo de retorno que terá = <string[]>
  
  console.log(numArray);
  console.log(stgArray);