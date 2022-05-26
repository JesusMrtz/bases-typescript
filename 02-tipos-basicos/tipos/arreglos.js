"use strict";
(function () {
    var numbers = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
    numbers.push(true);
    var names = ['jesus', 'martinez', 'torres'];
    console.log(names.map(function (v) { return v.toLocaleUpperCase(); }));
})();
