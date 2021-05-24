import { api } from './environment.api';

module.exports = {
  https: false,
  baseUrl: 'https://pokeapi.co/api/v2/',
  api: {
    ...api,
  },
};
