import { IPokemon } from '@shared/interface/IPokemon';

export interface IResponsePokemon {
  count?: number;
  next?: string | null;
  results?: Array<IPokemon>;
  forms?: Array<IPokemon>;
}
