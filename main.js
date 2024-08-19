"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fighter_1 = require("./src/fighter");
var fighterList_1 = require("./src/fighterList");
var combat_1 = require("./src/combat");
var promptSync = require("prompt-sync");
var prompt = promptSync();
console.log('Selecciona un luchador');
fighterList_1.list1.printFighters();
var choice = parseInt(prompt("Elige una opción: "));
var player = new fighter_1.Fighter();
if (choice == 1) {
    player = fighterList_1.list1.getFighter(0);
    fighterList_1.list1.removeFighter(0);
}
else if (choice == 2) {
    player = fighterList_1.list1.getFighter(1);
    fighterList_1.list1.removeFighter(1);
}
console.log('Selecciona un contrincante');
fighterList_1.list1.printFighters();
var choice2 = parseInt(prompt("Elige una opción: "));
var enemy = new fighter_1.Fighter();
if (choice2 == 1) {
    enemy = fighterList_1.list1.getFighter(0);
}
else if (choice2 == 2) {
    enemy = fighterList_1.list1.getFighter(1);
}
var combat1 = new combat_1.Combat(player, enemy);
combat1.start();
