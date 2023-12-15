import { Injectable } from "@nestjs/common";
import axios from "axios";
import { Pokemon } from "interfaces/pokemon";

@Injectable()
export class AppService {
  async getPokemons() {
    const pokemons = [];
    for (let i = 1; i < 5; i++) {
      const { data } = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${i}`,
      );

      pokemons.push({
        id: data.id,
        name: data.name,
        types: data.types.map((e) => e.type.name),
        sprites: data.sprites.other.dream_world.front_default,
        height: data.height,
        weight: data.weight,
      });
    }
    return pokemons;
  }
}
