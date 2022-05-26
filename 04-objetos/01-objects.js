"use strict";
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 23,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        powers: ['Súper fuerza'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash === null || flash === void 0 ? void 0 : flash.getName);
});
