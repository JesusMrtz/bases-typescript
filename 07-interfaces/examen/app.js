"use strict";
// Cree una interfaz para validar el auto (el valor enviado por parametro)
var conducirBatimovil = function (auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
var batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar: function () {
        console.log("...... gogogo!!!");
    }
};
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
var reir = function (guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
var ciudadGotica = function (ciudadanos) {
    return ciudadanos.length;
};
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    Persona.prototype.imprimirBio = function () {
        console.log('Hola wuapo');
    };
    return Persona;
}());
