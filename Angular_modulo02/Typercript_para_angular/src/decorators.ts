//DECORATORS -> decore uma função para que dispare uma ação, quando essa função decorator aparecer.
//Ex: toda vez que você ir ao mercado e ver o cafe com valor menos de 10 reais, compre ele.

//_____________________________________________________________________________//
//temos varia APIs e queremos documentar as versoes dessas APIs:
//class decorator
/* function apiVersion(version: string) {
    return (target: any) => { //função que retorna outra função
      Object.assign(target.prototype, { __version: version, __name: "monica" });
    };
}

@apiVersion("1.10")
class Api{}

const api = new Api()
console.log(api.__name) //rodar com o start:dev, pois os decorator ainda não são bem entendidos pelo typescript, fazendo assim não passa pelo build */

//_____________________________________________________________________________//

//attribute decorator
function minLength(length: number) {
    return (target: any, key: string) => {
      let _value = target[key];
  
      const getter = () => "[play]" + _value; //metodo de leitura -get-
      const setter = (value: string) => {//metodo de setar valor -set-
        if (value.length < length) {
          throw new Error(`Tamanho menor do que ${length}`);
        } else {
          _value = value;
        }
      };
  
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
      });
    };
  }
  
  class Api {
    //@minLength(5) //setando decorator com tamanho de 5 strings
    @minLength(10) //setando decorator com tamanho de 10 strings
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  //const api = new Api("usa"); //não passs,pois não há setado o tamanho de três strings
  //const api = new Api("usaada"); //passa
  const api = new Api("usaadasdaaaaa"); //passa
  console.log(api.name);