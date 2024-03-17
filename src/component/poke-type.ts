export type ListPokemon = {
  count: number;
  next: string | undefined;
  previous: string | undefined;
  results: Array<{
    name: string;
    url: string;
  }>;
};

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
};
