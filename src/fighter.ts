/**
 * Clase Fighter contiene name, damageType y sus statistics
 */
export class Fighter {
  private name: string;
  private skills: string[];
  private statistics: number[];

  constructor(name: string = "", skills: string[] = [], statistics: number[] =[0, 0, 0, 0, 0]) {
    this.name = name;
    this.skills = skills;
    this.statistics = statistics;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getSkills(): string[] {
    return this.skills;
  }

  public setSkills(newSkills: string[]): void {
    this.skills = newSkills;
  }

  public getSkillOne(): string {
    return this.skills[0];
  }

  public setSkillOne(newSkill: string): void {
    this.skills[0] = newSkill;
  }

  public getSkillTwo(): string {
    return this.skills[1];
  }

  public setSkillTwo(newSkill: string): void {
    this.skills[1] = newSkill;
  }

  public getStatistics(): number[] {
    return this.statistics;
  }

  public setStatistics(statistics: number[]): void {
    this.statistics = statistics;
  }

  public getHP(): number {
    return this.statistics[0];
  }

  public setHP(health: number): void {
    this.statistics[0] = health;
  }

  public getMP(): number {
    return this.statistics[1];
  }

  public setMP(health: number): void {
    this.statistics[1] = health;
  }

  public getAT(): number {
    return this.statistics[2];
  }

  public setAT(at: number): void {
    this.statistics[2] = at;
  }

  public getDEF(): number {
    return this.statistics[3];
  }

  public setDEF(def: number): void {
    this.statistics[3] = def;
  }

  public getSPEED(): number {
    return this.statistics[4];
  }

  public setSPEED(speed: number): void {
    this.statistics[4] = speed;
  }

}
