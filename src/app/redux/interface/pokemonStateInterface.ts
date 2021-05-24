import { IResponsePokemon } from '@shared/interface/IResponse';
import { IPokemon } from '@shared/interface/IPokemon';

export interface IAllPokemonState {
  pokemonList: IPokemonListState;
  pokemonDetail: IPokemonDetailState;
  currentPokemon: number | null;
}

export interface IPokemonListState {
  dataAllPokemons: IResponsePokemon | null;
  errorAllPokemons: string | null;
}

export interface IPokemonDetailState {
  pokemon: IPokemon | null;
  errorPokemonDetail: string | null;
}
