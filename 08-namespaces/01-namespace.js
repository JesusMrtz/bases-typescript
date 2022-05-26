"use strict";
var Validations;
(function (Validations) {
    function validateText(text) {
        return (text.length > 3) ? true : false;
    }
    Validations.validateText = validateText;
    function validateDate(myDate) {
        return (isNaN(myDate.valueOf())) ? false : true;
    }
    Validations.validateDate = validateDate;
})(Validations || (Validations = {}));
console.log(Validations.validateText('Fer'));
