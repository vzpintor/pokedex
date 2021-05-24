import { AxiosResponse } from 'axios';
import { get } from '@services/config/baseService';
import { IResponsePokemon } from '@shared/interface/IResponse';
import { IPokemonFilter } from '@shared/interface/IPokemon';

const { api } = require('@environments/env');

export const getPokemonService = async (
  params: IPokemonFilter,
): Promise<AxiosResponse<IResponsePokemon>> => {
  console.log('Params: ', { params });
  let url = api.pokemon.all;
  const { search } = params;

  if (search && search !== '') {
    console.log('Buscando con filtro', search);
    url += `/${search}`;
  }
  console.log('URL: ', url);
  return await get(`${url}`, { params });
};
