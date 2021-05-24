import { Dispatch } from 'redux';
import {
  getDetailPokemonService,
  getPokemonService,
} from '@services/pokemonService';
import {
  IPokemon,
  IPokemonFilter,
  IPokemonSpecies,
} from '@shared/interface/IPokemon';
import { STATUS } from '@services/config/reqStatus';
import { setLoading } from '@actions/general/generalActions';
import { IResponsePokemon } from '@shared/interface/IResponse';
import {
  CLEAN_CURRENT_POKEMON,
  CLEAN_POKEMON_DETAIL,
  GET_POKEMONS,
  SET_CURRENT_POKEMON,
  SET_POKEMON_DETAIL,
} from '@actions/pokemon/pokemonTypes';
import { MESSAGES } from '@services/config/messages';
import { IState } from '@reduxInterfaces/rootStateInterface';
import { AxiosResponse } from 'axios';

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

export function getPokemonDetail() {
  return async (dispatch: Dispatch, getState: () => IState) => {
    dispatch(setLoading(true));

    const { currentPokemon } = getState().pokemons;

    if (currentPokemon) {
      const [pokemon, specie]: [
        AxiosResponse<IPokemon>,
        AxiosResponse<IPokemonSpecies>,
      ] = await getDetailPokemonService(currentPokemon);

      switch (pokemon.status || specie.status) {
        case STATUS.OK:
          const flavorTextEntry = specie.data.flavor_text_entries.find(
            entry => entry.language.name === 'en',
          );

          dispatch(
            setPokemonDetail({
              ...pokemon.data,
              description: flavorTextEntry
                ? flavorTextEntry.flavor_text
                : 'Data Not Found',
            }),
          );
          dispatch(setLoading(false));
          break;
        case STATUS.NOT_FOUND:
          dispatch(errorPokemon(MESSAGES.NOT_FOUND));
          dispatch(setLoading(false));
          break;
        default:
          dispatch(setErrorPokemonDetail(MESSAGES.INTERNAL_SERVER));
          dispatch(setLoading(false));
          break;
      }
    }
    dispatch(setLoading(false));
  };
}

export function cleanDetailPokemon() {
  return {
    type: CLEAN_POKEMON_DETAIL,
    payload: true,
  };
}

export function setPokemonDetail(pokemon: IPokemon) {
  return {
    type: SET_POKEMON_DETAIL,
    payload: {
      pokemon,
      errorPokemonDetail: null,
    },
  };
}

export function setErrorPokemonDetail(errorPokemonDetail: string) {
  return {
    type: SET_POKEMON_DETAIL,
    payload: {
      pokemonDetail: null,
      errorPokemonDetail,
    },
  };
}

export function cleanCurrentPokemon() {
  return {
    type: CLEAN_CURRENT_POKEMON,
    payload: true,
  };
}

export function setCurrentPokemon(currentPokemon: number) {
  return {
    type: SET_CURRENT_POKEMON,
    payload: currentPokemon,
  };
}
