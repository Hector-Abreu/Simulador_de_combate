"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
/**
 * Clase Fighter contiene name, damageType y sus statistics
 */
var Fighter = /** @class */ (function () {
    function Fighter(name, skills, statistics) {
        if (name === void 0) { name = ""; }
        if (skills === void 0) { skills = []; }
        if (statistics === void 0) { statistics = [0, 0, 0, 0, 0]; }
        this.name = name;
        this.skills = skills;
        this.statistics = statistics;
    }
    Fighter.prototype.getName = function () {
        return this.name;
    };
    Fighter.prototype.setName = function (name) {
        this.name = name;
    };
    Fighter.prototype.getSkills = function () {
        return this.skills;
    };
    Fighter.prototype.setSkills = function (newSkills) {
        this.skills = newSkills;
    };
    Fighter.prototype.getSkillOne = function () {
        return this.skills[0];
    };
    Fighter.prototype.setSkillOne = function (newSkill) {
        this.skills[0] = newSkill;
    };
    Fighter.prototype.getSkillTwo = function () {
        return this.skills[1];
    };
    Fighter.prototype.setSkillTwo = function (newSkill) {
        this.skills[1] = newSkill;
    };
    Fighter.prototype.getStatistics = function () {
        return this.statistics;
    };
    Fighter.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
    };
    Fighter.prototype.getHP = function () {
        return this.statistics[0];
    };
    Fighter.prototype.setHP = function (health) {
        this.statistics[0] = health;
    };
    Fighter.prototype.getMP = function () {
        return this.statistics[1];
    };
    Fighter.prototype.setMP = function (health) {
        this.statistics[1] = health;
    };
    Fighter.prototype.getAT = function () {
        return this.statistics[2];
    };
    Fighter.prototype.setAT = function (at) {
        this.statistics[2] = at;
    };
    Fighter.prototype.getDEF = function () {
        return this.statistics[3];
    };
    Fighter.prototype.setDEF = function (def) {
        this.statistics[3] = def;
    };
    Fighter.prototype.getSPEED = function () {
        return this.statistics[4];
    };
    Fighter.prototype.setSPEED = function (speed) {
        this.statistics[4] = speed;
    };
    return Fighter;
}());
exports.Fighter = Fighter;
