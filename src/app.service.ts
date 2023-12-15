import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { pokemon } from 'types/interface';

@Injectable()
export class AppService {
 async getPokemons() {
    let pokemons: Array<pokemon> = [];

     for (let i = 1; i < 5; i++) {

       const {data} = await axios.get<pokemon>('https://pokeapi.co/api/v2/pokemon/' + i)

       pokemons.push( {
        id: data.id,
        name: data.name,
        types: data.types.map(e => e.type.name),
        sprites: data.sprites.other.dream_world.front_default,
        height: data.height,
        weight: data.weight
       })
    }
 
     return pokemons
   
  }
}
