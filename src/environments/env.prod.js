import { api } from './environment.api';

module.exports = {
  https: true,
  baseUrl: 'https://pokeapi.co/api/v2/',
  api: {
    ...api,
  },
};
