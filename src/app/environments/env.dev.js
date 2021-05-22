import {api} from './environment.api';

module.exports = {
  api: {
    ...api,
    base: 'https://pokeapi.co/api/v2/',
  },
};
