"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = ['batman', 'superman'];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var FuerzaSuperHeroe;
    (function (FuerzaSuperHeroe) {
        FuerzaSuperHeroe[FuerzaSuperHeroe["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        FuerzaSuperHeroe[FuerzaSuperHeroe["fuerzaBatman"] = 1] = "fuerzaBatman";
        FuerzaSuperHeroe[FuerzaSuperHeroe["fuerzaFlash"] = 5] = "fuerzaFlash";
        FuerzaSuperHeroe[FuerzaSuperHeroe["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(FuerzaSuperHeroe || (FuerzaSuperHeroe = {}));
    ;
    var fuerzaFlash = FuerzaSuperHeroe.fuerzaFlash;
    var fuerzaSuperman = FuerzaSuperHeroe.fuerzaSuperman;
    var fuerzaBatman = FuerzaSuperHeroe.fuerzaBatman;
    var fuerzaAcuaman = FuerzaSuperHeroe.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
