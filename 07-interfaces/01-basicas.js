"use strict";
(function () {
    var _a, _b;
    ;
    var flash = {
        name: 'Barry Allen',
        age: 23,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza'],
        getName: function () {
            return this.name;
        }
    };
    console.log('Hola');
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
    console.log((_b = superman.getName) === null || _b === void 0 ? void 0 : _b.call(superman));
})();
