import { IGeneralState } from './generalInterface';
import { IAllPokemonState } from './pokemonInterface';

export interface IState {
  general: IGeneralState;
  pokemons: IAllPokemonState;
}
