//FUNÇÕES

function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
  }

function CallToPhone(phone: number | string): number | string { //aceita tanto numero quanto texto
    return phone;
}
  

let soma: number = addNumber(4, 7);
console.log(addToHello("OLA"));
console.log(CallToPhone(123456));