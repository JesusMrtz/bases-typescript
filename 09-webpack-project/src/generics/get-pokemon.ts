import axios from 'axios';
import { Pokemon } from '../interfaces/pokemon';

export async function getPokemon( id: number ): Promise<Pokemon> {
  try {
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ id }`);
    return data;
  } catch (error) { 
    throw new Error ('Hay un error en');
  }
}