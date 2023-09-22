//FUNÇÕES

function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
  }

//FUNÇÕES MULTI TYPES
function CallToPhone(phone: number | string): number | string { //aceita tanto numero quanto texto
    return phone;
}

//FUNÇÃO ASSINCRONA
async function getDatabase(id: number): Promise<string> { //função assincrona sempre retorna uma promisse, é a promessa que algo será retornado mas não de imediato
    return "felipe";
}

//SAIDAS
let soma: number = addNumber(4, 7);
console.log(addToHello("OLA"));
console.log(CallToPhone(123456));