"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combat = void 0;
exports.dmg = dmg;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function dmg(atA, defB) {
    var critChance = Math.floor(Math.random() * 10) + 1;
    var dammage = 50 * (atA / defB);
    if (critChance == 10) {
        dammage *= 2;
        console.log('¡Golpe crítico!');
    }
    return dammage;
}
var Combat = /** @class */ (function () {
    function Combat(fight1, fight2) {
        this.fighter1 = fight1;
        this.fighter2 = fight2;
    }
    Combat.prototype.useSkillOne = function (fighterName) {
        if (fighterName == 'Picaro' && this.fighter1.getMP() >= 50) {
            console.log("".concat(this.fighter1.getName(), " us\u00F3 Emboscada"));
            this.fighter1.setMP(this.fighter1.getMP() - 50);
            this.fighter2.setHP(this.fighter2.getHP() - dmg(this.fighter1.getAT(), this.fighter2.getDEF()) - 30);
        }
        else if (fighterName == 'Guerrero' && this.fighter1.getMP() >= 50) {
            console.log("".concat(this.fighter1.getName(), " us\u00F3 Ataque Furtivo"));
            this.fighter1.setMP(this.fighter1.getMP() - 50);
            this.fighter2.setHP(this.fighter2.getHP() - dmg(this.fighter1.getAT(), this.fighter2.getDEF()) - 20);
        }
    };
    Combat.prototype.useSkillTwo = function (fighterName) {
        if (fighterName == 'Picaro' && this.fighter1.getMP() >= 150) {
            console.log("".concat(this.fighter1.getName(), " us\u00F3 Pu\u00F1alada"));
            this.fighter1.setMP(this.fighter1.getMP() - 150);
            this.fighter2.setHP(this.fighter2.getHP() - dmg(this.fighter1.getAT(), this.fighter2.getDEF()) - 40);
        }
        else if (fighterName == 'Guerrero' && this.fighter1.getMP() >= 50) {
            console.log("".concat(this.fighter1.getName(), " us\u00F3 Tomar Aliento"));
            this.fighter1.setMP(this.fighter1.getMP() - 150);
            this.fighter1.setHP(this.fighter1.getHP() + 1000);
        }
    };
    /**
     * método start() que imprime el resultado, paso a paso, del combate
     */
    Combat.prototype.start = function () {
        var turns = 1;
        // if (this.fighter1.getSPEED() < this.fighter2.getSPEED()) {
        //   let tmp: Fighter = this.fighter1;
        //   this.fighter1 = this.fighter2;
        //   this.fighter2 = tmp;
        // }
        while (this.fighter1.getHP() > 0 || this.fighter2.getHP() > 0) {
            console.log("Turno: ".concat(turns));
            console.log("".concat(this.fighter1.getName(), "   Vida: ").concat(this.fighter1.getHP(), "   Man\u00E1: ").concat(this.fighter1.getMP(), "   ").concat(this.fighter2.getName(), "   Vida: ").concat(this.fighter2.getHP(), "   Man\u00E1: ").concat(this.fighter2.getMP()));
            console.log("\nOpciones de combate:");
            console.log("1. Atacar");
            console.log("2. Usar Habilidad");
            var choice = prompt("Elige una opción: ");
            switch (choice) {
                case "1":
                    console.log("Ataque de ".concat(this.fighter1.getName()));
                    this.fighter2.setHP(this.fighter2.getHP() - dmg(this.fighter1.getAT(), this.fighter2.getDEF()));
                    break;
                case "2":
                    console.log("\nHabilidades:");
                    console.log("1: ".concat(this.fighter1.getSkillOne()));
                    console.log("2: ".concat(this.fighter1.getSkillTwo()));
                    var abilityChoice = parseInt(prompt("Elige una habilidad: "));
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
                console.log("".concat(this.fighter2.getName(), " se ha debilitado"));
                console.log("Ganador ".concat(this.fighter1.getName()));
                break;
            }
            console.log("Ataque de ".concat(this.fighter2.getName()));
            this.fighter1.setHP(this.fighter1.getHP() - dmg(this.fighter2.getAT(), this.fighter1.getDEF()));
            if (this.fighter1.getHP() <= 0) {
                console.log("".concat(this.fighter1.getName(), " se ha debilitado"));
                console.log("Ganador ".concat(this.fighter2.getName()));
                break;
            }
            turns += 1;
        }
    };
    return Combat;
}());
exports.Combat = Combat;
