import * as promptSync from "prompt-sync";
import { Fighter } from "./fighter";

const prompt = promptSync();

export function dmg(atA: number, defB: number): number {
  let critChance: number = Math.floor(Math.random() * 10) + 1;
  let dammage: number = 50 * (atA / defB);
  if (critChance == 10) {
    dammage *= 2;
    console.log('¡Golpe crítico!');
  }
  return dammage;
}

export class Combat {
  private fighter1: Fighter;
  private fighter2: Fighter;
  constructor(fight1: Fighter, fight2: Fighter) {
    this.fighter1 = fight1;
    this.fighter2 = fight2;
  }

  useSkillOne(fighterName: string) {
    if (fighterName == 'Picaro' && this.fighter1.getMP() >= 50) {
      console.log(`${this.fighter1.getName()} usó Emboscada`);
      this.fighter1.setMP(this.fighter1.getMP() - 50);
      this.fighter2.setHP(this.fighter2.getHP() - dmg(this.fighter1.getAT(), this.fighter2.getDEF()) - 30);
    } else if (fighterName == 'Guerrero' && this.fighter1.getMP() >= 50) {
      console.log(`${this.fighter1.getName()} usó Ataque Furtivo`);
      this.fighter1.setMP(this.fighter1.getMP() - 50);
      this.fighter2.setHP(this.fighter2.getHP() - dmg(this.fighter1.getAT(), this.fighter2.getDEF()) - 20);
    }
  }

  useSkillTwo(fighterName: string) {
    if (fighterName == 'Picaro' && this.fighter1.getMP() >= 150) {
      console.log(`${this.fighter1.getName()} usó Puñalada`);
      this.fighter1.setMP(this.fighter1.getMP() - 150);
      this.fighter2.setHP(this.fighter2.getHP() - dmg(this.fighter1.getAT(), this.fighter2.getDEF()) - 40);
    } else if (fighterName == 'Guerrero' && this.fighter1.getMP() >= 50) {
      console.log(`${this.fighter1.getName()} usó Tomar Aliento`);
      this.fighter1.setMP(this.fighter1.getMP() - 150);
      this.fighter1.setHP(this.fighter1.getHP() + 1000);
    }
  }

  /**
   * método start() que imprime el resultado, paso a paso, del combate
   */
  start() {
    let turns: number = 1;

    // if (this.fighter1.getSPEED() < this.fighter2.getSPEED()) {
    //   let tmp: Fighter = this.fighter1;
    //   this.fighter1 = this.fighter2;
    //   this.fighter2 = tmp;
    // }

    while (this.fighter1.getHP() > 0 || this.fighter2.getHP() > 0) {
      console.log(`Turno: ${turns}`);
      console.log(`${this.fighter1.getName()}   Vida: ${this.fighter1.getHP()}   Maná: ${this.fighter1.getMP()}   ${this.fighter2.getName()}   Vida: ${this.fighter2.getHP()}   Maná: ${this.fighter2.getMP()}`);
      console.log("\nOpciones de combate:");
      console.log("1. Atacar");
      console.log("2. Usar Habilidad");

      const choice = prompt("Elige una opción: ");

      switch (choice) {
        case "1":
          console.log(`Ataque de ${this.fighter1.getName()}`);
          this.fighter2.setHP(this.fighter2.getHP() - dmg(this.fighter1.getAT(), this.fighter2.getDEF()));
          break;

        case "2":
          console.log("\nHabilidades:");
          console.log(`1: ${this.fighter1.getSkillOne()}`);
          console.log(`2: ${this.fighter1.getSkillTwo()}`);

          const abilityChoice = parseInt(prompt("Elige una habilidad: "));

          switch (abilityChoice) {
            case 1:
              this.useSkillOne(this.fighter1.getName());
              break;
            case 2:
              this.useSkillTwo(this.fighter1.getName());
              break;
            default:
              break;
          }
      }

      if (this.fighter2.getHP() <= 0) {
        console.log(`${this.fighter2.getName()} se ha debilitado`);
        console.log(`Ganador ${this.fighter1.getName()}`);
        break;
      }

      console.log(`Ataque de ${this.fighter2.getName()}`);
      this.fighter1.setHP(this.fighter1.getHP() - dmg(this.fighter2.getAT(), this.fighter1.getDEF()));

      if (this.fighter1.getHP() <= 0) {
        console.log(`${this.fighter1.getName()} se ha debilitado`);
        console.log(`Ganador ${this.fighter2.getName()}`);
        break;
      }
      turns += 1;
    }
  }
}