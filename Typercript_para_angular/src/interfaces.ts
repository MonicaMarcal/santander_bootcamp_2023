//INTERFACES (TYPE X INTERFACE)

//type: usado mais com objetos
//interface: usada mais com classes

type robot = {   
    readonly id: number | string;
    name: string;
  };
  
  interface robot2 {  
    readonly id: number | string;
    name: string;
  }
  
  const bot1: robot = { 
    id: "1",
    name: "megaman",
  };
  
  const bot2: robot2 = { 
    id: "1",
    name: "megaman",
}

console.log(bot1);
console.log(bot2);