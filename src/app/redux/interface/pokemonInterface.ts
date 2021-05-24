import { AxiosError } from 'axios';
import { IResponsePokemon } from '@shared/interface/IResponse';

export interface IAllPokemonState {
  pokemonList: IPokemonListState;
}

export interface IPokemonListState {
  dataAllPokemons: IResponsePokemon | null;
  errorAllPokemons: AxiosError | null;
}
