import { IGeneralState } from '@reduxInterfaces/generalStateInterface';
import { IAllPokemonState } from '@reduxInterfaces/pokemonStateInterface';

export interface IState {
  general: IGeneralState;
  pokemons: IAllPokemonState;
}
