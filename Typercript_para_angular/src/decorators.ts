//DECORATORS -> decore uma função para que dispare uma ação, quando essa função decorator aparecer.
//Ex: toda vez que você ir ao mercado e ver o cafe com valor menos de 10 reais, compre ele.

function exibirNome(target: any){
    console.log(target)
}

@exibirNome // chamando decorator 
class Funcionario{}

@exibirNome // chamando decorator
class Dono{}