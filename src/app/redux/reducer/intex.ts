import { combineReducers } from 'redux';
import general from './generalReducer';
import pokemons from './pokemonReducer';

const reducers = combineReducers({
  general,
  pokemons,
});

export default reducers;
