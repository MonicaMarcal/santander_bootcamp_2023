//CLASSES
//classe é como se fosse uma forma para utilizar varias vezes

/*
  data modifiers(modificadores de acesso)temos:
  public -> todos acessam
  private -> acesso somente dentro da classe
  protected -> acesso pela classe e subclasse que herdam a classe PAI
*/

class Character {
  protected name?: string;
  readonly stregth: number;
  skill: number;

  constructor(name: string, stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }
  
    attack(): void {
      console.log(`Attack with ${this.stregth} points`);
    }
  }

//Character: superclass -> classe PAI
//Magician: subclass -> classe FILHA
class Magician extends Character {
    magicPoints: number;
    constructor(
      name: string,
      stregth: number,
      skill: number,
      magicPoints: number
    ) {
      super(name, stregth, skill);
      this.magicPoints = magicPoints;
    }
  }


const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);

console.log(p1)
p1.attack();