import { Hero as SuperHero } from '../classes/Hero';
import { printObject } from '../generics/generics';
import { Hero, Villain } from '../interfaces';

const Hero = 1234;
const batman = new SuperHero('Batman', 1, 42);
console.log(batman.power);


/** IMPRIMIENDO FUNCIONES GENERICAS  */
// console.log( printObject(123.34234234).toFixed(2) );
// console.log( printObject('Hola Mundo').toUpperCase() );
// console.log( printObject(new Date()).toDateString() );


const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130
}

console.log( printObject<Villain>(deadpool).dangerLevel );