/**
 * Clase Skills, lista de habilidades
 */
export class Skills {
  private warriorSkills: string[] = ['Ataque Furtivo', 'Tomar aliento'];
  private rogueSkills: string[] = ['Emboscada', 'Puñalada']; 
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
