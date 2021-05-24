import { AxiosResponse } from 'axios';
import { get } from '@services/config/baseService';
import { IResponsePokemon } from '@shared/interface/IResponse';
import { IPokemonFilter } from '@shared/interface/IPokemon';

const { api } = require('@environments/env');

export const getPokemonService = async (
  params: IPokemonFilter,
): Promise<AxiosResponse<IResponsePokemon>> => {
  return await get(api.pokemon.all, { params });
};
