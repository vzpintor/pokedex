import { Dispatch } from 'redux';
import { getPokemonService } from '@services/pokemonService';
import { IPokemonFilter } from '@shared/interface/IPokemon';
import { STATUS } from '@services/config/reqStatus';
import { setLoading } from '@actions/general/generalActions';
import { IResponsePokemon } from '@shared/interface/IResponse';
import { GET_POKEMONS } from '@actions/pokemon/pokemonTypes';
import { MESSAGES } from '@services/config/messages';

export function getPokemons(params: IPokemonFilter) {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));

    const { search } = params;

    const response = await getPokemonService(params);

    switch (response.status) {
      case STATUS.OK:
        if (search) {
          const forms = response.data.forms;
          if (forms) {
            console.log('======>forms: ', forms[0]);
            dispatch(receivePokemon({ forms }));
          }
        } else {
          dispatch(receivePokemon(response.data));
        }
        dispatch(setLoading(false));
        break;
      case STATUS.NOT_FOUND:
        dispatch(errorPokemon(MESSAGES.NOT_FOUND));
        dispatch(setLoading(false));
        break;
      default:
        dispatch(setLoading(false));
        dispatch(errorPokemon(MESSAGES.INTERNAL_SERVER));
        break;
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

export function errorPokemon(errorAllPokemons: string) {
  return {
    type: GET_POKEMONS,
    payload: {
      dataAllPokemons: null,
      errorAllPokemons,
    },
  };
}
