import { Dispatch } from 'redux';
import { getPokemonService } from '@services/pokemonService';
import { IPokemonFilter } from '@shared/interface/IPokemon';
import { STATUS } from '@services/config/reqStatus';
import { setLoading } from '@actions/general/generalActions';
import { IResponsePokemon } from '@shared/interface/IResponse';
import { GET_POKEMONS } from '@actions/pokemon/pokemonTypes';

export function getPokemons(params: IPokemonFilter) {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const response = await getPokemonService(params);

    if (response.status === STATUS.OK) {
      dispatch(receivePokemon(response.data));
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(false));
      dispatch(errorPokemon(response));
    }
  };
}

export function receivePokemon(dataAllPokemons: IResponsePokemon) {
  return {
    type: GET_POKEMONS,
    payload: {
      dataAllPokemons,
      errorAllPokemons: null,
    },
  };
}

export function errorPokemon(errorAllPokemons: any) {
  return {
    type: GET_POKEMONS,
    payload: {
      dataAllPokemons: null,
      errorAllPokemons,
    },
  };
}
