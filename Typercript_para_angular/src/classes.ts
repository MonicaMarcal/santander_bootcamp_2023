//CLASSES
//classe é como se fosse uma forma para utilizar varias vezes

/*
  data modifiers
  public
  private
  protected
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

const p1 = new Character("Ryu", 10, 98);
console.log(p1)
p1.attack();