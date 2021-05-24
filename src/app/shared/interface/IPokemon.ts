export interface IPokemon {
  id: number;
  name: string;
  url: string;
}

export interface IPokemonFilter {
  offset: number;
  limit: number;
}
