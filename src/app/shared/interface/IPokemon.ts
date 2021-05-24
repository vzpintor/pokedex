export interface IPokemon {
  id: number;
  name: string;
  url: string;
  height?: string;
  weight?: string;
  stats: Array<IStats>;
  description: string;
}

export interface IPokemonFilter {
  offset?: number;
  limit?: number;
  search?: string;
}

export interface IStats {
  base_stat: number;
  effort: number;
  stat: IStat;
}

export interface IStat {
  name: string;
  url: string;
}

export interface IPokemonSpecies {
  flavor_text_entries: Array<IFlavorTextEntries>;
}

export interface IFlavorTextEntries {
  flavor_text: string;
  language: ILanguage;
}

export interface ILanguage {
  name: string;
  url: string;
}
