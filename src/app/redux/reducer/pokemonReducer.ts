import { GET_POKEMONS } from '@actions/pokemon/pokemonTypes';
import { IAllPokemonState } from '@reduxInterfaces/pokemonInterface';

const INITIAL_STATE: IAllPokemonState = {
  pokemonList: {
    dataAllPokemons: null,
    errorAllPokemons: null,
  },
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_POKEMONS: {
      return {
        ...state,
        pokemonList: action.payload,
      };
    }
    default:
      return state;
  }
};
