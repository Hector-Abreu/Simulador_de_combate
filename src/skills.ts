import { Combat } from "./combat";

/**
 * Clase Skills, lista de habilidades
 */
export class Skills {
  private warriorSkills: string[];
  private rogueSkills: string[]; 
  constructor(){}

  public getWarriorSkills(): string[] {
    return this.warriorSkills;
  }

  public getRogueSkills(): string[] {
    return this.rogueSkills;
  }

  public setWarriorSkills(newSkills: string[]) {
    this.warriorSkills = newSkills;
  }

  public setRogueSkills(newSkills: string[]) {
    this.rogueSkills = newSkills;
  }

}

export let skillList: Skills = new Skills(); 
skillList.setWarriorSkills(['Ataque Furtivo', 'Tomar aliento']);
skillList.setRogueSkills(['Emboscada', 'Puñalada']);