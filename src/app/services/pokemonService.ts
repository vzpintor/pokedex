import { AxiosResponse } from 'axios';
import { get } from '@services/config/baseService';
import { IResponsePokemon } from '@shared/interface/IResponse';
import {
  IPokemon,
  IPokemonFilter,
  IPokemonSpecies,
} from '@shared/interface/IPokemon';

const { api } = require('@environments/env');

export const getPokemonService = async (
  params: IPokemonFilter,
): Promise<AxiosResponse<IResponsePokemon>> => {
  let url = api.pokemon.pokemons;
  const { search } = params;

  if (search && search !== '') {
    url += `/${search}`;
  }
  return await get(`${url}`, { params });
};

export const getDetailPokemonService = async (
  id: number,
): Promise<[AxiosResponse<IPokemon>, AxiosResponse<IPokemonSpecies>]> => {
  const pokemonPromise: Promise<AxiosResponse<IPokemon>> = get(
    `${api.pokemon.pokemons}/${id}`,
  );

  const speciePromise: Promise<AxiosResponse<IPokemonSpecies>> = get(
    `${api.pokemon.pokeSpecie}/${id}`,
  );

  const listOfRequest: [
    Promise<AxiosResponse<IPokemon>>,
    Promise<AxiosResponse<IPokemonSpecies>>,
  ] = [pokemonPromise, speciePromise];

  return await Promise.all<
    AxiosResponse<IPokemon>,
    AxiosResponse<IPokemonSpecies>
  >(listOfRequest);
};
