import { Fighter } from "./fighter";

/**
 * Clase FighterList recibe un array de Fighter
 */
export class FighterList {
  private fighters: Fighter[];
  constructor (FighterList: Fighter[]){
    this.fighters = FighterList;
  }

  public getFighters(): Fighter[] {
    return this.fighters;
  }
  
  public getFighter(pos: number): Fighter {
    return this.fighters[pos];
  }

  public setFighter(fighter: Fighter): void {
    this.fighters.push(fighter);
  }

  public getLength(): number {
    return this.fighters.length;
  }

  public removeFighter(pos: number): void {
    this.fighters.splice(pos, 1);
  }

  /**
   * método printFighters() imprime los valores de cada Fighter
   */
  printFighters(){
    for (let i: number = 0; i < this.fighters.length; i++) {
      console.log(`Luchador Nº ${i + 1}`);
      console.log(`Nombre: ${this.fighters[i].getName()}`);
      console.log(`Habilidades:`);
      console.log(`Skill 1: ${this.fighters[i].getSkillOne()} Skill 2: ${this.fighters[i].getSkillTwo()}`);
      console.log(`Estadísticas:`);
      console.log(`HP: ${this.fighters[i].getHP()} Mana: ${this.fighters[i].getMP()}  AT: ${this.fighters[i].getAT()} DEF: ${this.fighters[i].getDEF()} VEL: ${this.fighters[i].getSPEED()} \n`);
    }
  }
}

let warrior = new Fighter('Guerrero', ['Ataque Furtivo', 'Tomar aliento'], [500, 150, 5, 7, 15]);
let rogue = new Fighter('Picaro', ['Emboscada', 'Puñalada'], [350, 200, 7, 5, 20]);

export let list1: FighterList = new FighterList([warrior, rogue]);