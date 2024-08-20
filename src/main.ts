import { Fighter } from "./fighter";
import { list1 } from "./fighterList";
import { Combat } from "./combat";
import * as promptSync from "prompt-sync";

const prompt = promptSync();

console.log('Selecciona un luchador');
list1.printFighters();
const choice = parseInt(prompt("Elige una opción: "));
let player: Fighter = new Fighter();

if (choice == 1) {
  player = list1.getFighter(0);
  list1.removeFighter(0);
} else if (choice == 2) {
  player = list1.getFighter(1);
  list1.removeFighter(1);
}

console.log('Selecciona un contrincante');
list1.printFighters();
const choice2 = parseInt(prompt("Elige una opción: "));
let enemy: Fighter = new Fighter();

if (choice2 == 1) {
  enemy = list1.getFighter(0);
} else if (choice2 == 2) {
  enemy = list1.getFighter(1);
}

let combat1: Combat = new Combat(player, enemy);
combat1.start();
