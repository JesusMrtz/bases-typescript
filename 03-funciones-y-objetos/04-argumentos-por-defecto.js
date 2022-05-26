"use strict";
(function () {
    function fullName(firstName, lastName, superHero) {
        if (superHero === void 0) { superHero = 'Iroman'; }
        return "".concat(firstName, " ").concat(lastName || 'Sin apellido', " es ").concat(superHero);
    }
    console.log(fullName('Tony', 'Stark'));
})();
