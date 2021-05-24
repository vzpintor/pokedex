import { IPokemon } from '@shared/interface/IPokemon';

export interface IResponsePokemon {
  count?: number;
  results?: Array<IPokemon>;
  forms?: Array<IPokemon>;
}
