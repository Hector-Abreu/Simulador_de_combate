"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list1 = exports.FighterList = void 0;
var fighter_1 = require("./fighter");
/**
 * Clase FighterList recibe un array de Fighter
 */
var FighterList = /** @class */ (function () {
    function FighterList(FighterList) {
        this.fighters = FighterList;
    }
    FighterList.prototype.getFighter = function (pos) {
        return this.fighters[pos];
    };
    FighterList.prototype.setFighter = function (fighter) {
        this.fighters.push(fighter);
    };
    FighterList.prototype.getLength = function () {
        return this.fighters.length;
    };
    FighterList.prototype.removeFighter = function (pos) {
        this.fighters.splice(pos, 1);
    };
    /**
     * método printFighters() imprime los valores de cada Fighter
     */
    FighterList.prototype.printFighters = function () {
        for (var i = 0; i < this.fighters.length; i++) {
            console.log("Luchador N\u00BA ".concat(i + 1));
            console.log("Nombre: ".concat(this.fighters[i].getName()));
            console.log("Habilidades:");
            console.log("Skill 1: ".concat(this.fighters[i].getSkillOne(), " Skill 2: ").concat(this.fighters[i].getSkillTwo()));
            console.log("Estad\u00EDsticas:");
            console.log("HP: ".concat(this.fighters[i].getHP(), " Mana: ").concat(this.fighters[i].getMP(), "  AT: ").concat(this.fighters[i].getAT(), " DEF: ").concat(this.fighters[i].getDEF(), " VEL: ").concat(this.fighters[i].getSPEED(), " \n"));
        }
    };
    return FighterList;
}());
exports.FighterList = FighterList;
var warrior = new fighter_1.Fighter('Guerrero', ['Ataque Furtivo', 'Tomar aliento'], [500, 150, 5, 7, 15]);
var rogue = new fighter_1.Fighter('Picaro', ['Emboscada', 'Puñalada'], [350, 200, 7, 5, 20]);
exports.list1 = new FighterList([warrior, rogue]);
