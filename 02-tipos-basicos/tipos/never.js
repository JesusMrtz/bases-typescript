"use strict";
(function () {
    /**
     * Una función never no debe terminar exitosamente
     */
    function error(message) {
        throw new Error(message);
    }
    error('Hay un error!, auxilio!!');
})();
