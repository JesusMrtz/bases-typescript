"use strict";
(function () {
    function fullName(firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'Sin apellido');
    }
    console.log(fullName('Tony'));
})();
