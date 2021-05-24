import { api } from './environment.api';

module.exports = {
  itemsPerPage: 50,
  https: true,
  baseUrl: 'https://pokeapi.co/api/v2/',
  api: {
    ...api,
  },
};
