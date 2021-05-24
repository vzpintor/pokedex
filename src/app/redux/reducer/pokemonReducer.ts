import {
  CLEAN_CURRENT_POKEMON,
  CLEAN_POKEMON_DETAIL,
  GET_POKEMONS,
  SET_CURRENT_POKEMON,
  SET_POKEMON_DETAIL,
} from '@actions/pokemon/pokemonTypes';
import { IAllPokemonState } from '@reduxInterfaces/pokemonStateInterface';

const INITIAL_STATE: IAllPokemonState = {
  pokemonList: {
    dataAllPokemons: null,
    errorAllPokemons: null,
  },
  pokemonDetail: {
    pokemon: null,
    errorPokemonDetail: null,
  },
  currentPokemon: null,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_POKEMONS: {
      return {
        ...state,
        pokemonList: action.payload,
      };
    }
    case SET_POKEMON_DETAIL: {
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    }
    case CLEAN_POKEMON_DETAIL: {
      return {
        ...state,
        pokemonDetail: {
          pokemon: null,
          errorPokemonDetail: null,
        },
      };
    }
    case SET_CURRENT_POKEMON: {
      return {
        ...state,
        currentPokemon: action.payload,
      };
    }
    case CLEAN_CURRENT_POKEMON: {
      return {
        ...state,
        currentPokemon: null,
      };
    }
    default:
      return state;
  }
};
