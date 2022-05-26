import { getPokemon } from './generics/get-pokemon';
getPokemon(4)
.then( resp => console.log(resp.sprites.front_default))
.finally(() => console.log('Fin del getPokemon'));