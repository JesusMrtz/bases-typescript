"use strict";
var Avenger = /** @class */ (function () {
    function Avenger(name, team, publicName) {
        this.name = name;
        this.team = team;
        this.publicName = publicName;
    }
    Avenger.prototype.bio = function () {
        return "".concat(this.name, " es Team ").concat(this.team);
    };
    Avenger.getName = function () {
        return this.avgAge;
    };
    // private name: string;
    // private team: string;
    // public realName?: string;
    Avenger.avgAge = 35;
    return Avenger;
}());
var antMan = new Avenger('AntMan', 'Capitan', 'Scot Lang');
console.log(antMan.bio());
console.log(Avenger.getName());
