//DECORATORS -> decore uma função para que dispare uma ação, quando essa função decorator aparecer.
//Ex: toda vez que você ir ao mercado e ver o cafe com valor menos de 10 reais, compre ele.

//temos varia APIs e queremos documentar as versoes dessas APIs:
//class decorator
function apiVersion(version: string) {
    return (target: any) => { //função que retorna outra função
      Object.assign(target.prototype, { __version: version, __name: "monica" });
    };
}

@apiVersion("1.10")
class Api{}

const api = new Api()
console.log(api.__name) //rodar com o start:dev, pois os decorator ainda não são bem entendidos pelo typescript, fazendo assim não passa pelo build