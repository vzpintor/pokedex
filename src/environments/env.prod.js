import { api } from './environment.api';

module.exports = {
  itemsPerPage: 50,
  https: true,
  baseUrl: 'https://pokeapi.co/api/v2/',
  baseUrlAssets: 'https://pokeres.bastionbot.org/images/pokemon/',
  api: {
    ...api,
  },
};
