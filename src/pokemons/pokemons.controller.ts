import { Controller, Get } from "@nestjs/common";
import { Pokemon } from "interfaces/pokemon";
import { AppService } from "src/app.service";

@Controller("pokemons")
export class PokemonsController {
  @Get()
  obtenerDatos(): Promise<Pokemon[]> {
    const service = new AppService();
    return service.getPokemons();
  }
}
