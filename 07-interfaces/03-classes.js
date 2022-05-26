"use strict";
(function () {
    var Mutant = /** @class */ (function () {
        function Mutant(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        Mutant.prototype.mutantPower = function (id) {
            return "".concat(this.name, " ").concat(this.realName);
        };
        return Mutant;
    }());
})();
