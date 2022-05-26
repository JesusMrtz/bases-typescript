"use strict";
(function () {
    function suspiciousPeople() {
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            names[_i] = arguments[_i];
        }
        return 'Los nombres de los sospechosos son: '.concat(names.reduce(function (concatText, value, index, array) {
            var capitalizeValue = "".concat(value.charAt(0).toUpperCase().concat(value.slice(1)));
            var capitalizeConcat = "".concat(concatText.charAt(0).toUpperCase().concat(concatText.slice(1)));
            return (value === array[array.length - 1]) ? "".concat(capitalizeConcat, " y ").concat(capitalizeValue, ".") : "".concat(capitalizeConcat, ", ").concat(capitalizeValue);
        }));
    }
    console.log(suspiciousPeople('jesus', 'karely', 'jose'));
})();
