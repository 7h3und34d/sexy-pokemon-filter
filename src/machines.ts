import { RefObject } from "react";
import { assign, Machine, MachineConfig } from "xstate";

export interface Pokemon {
  id: number;
  name: {
    english: string;
    japanese: string;
  };
  type: string[];
  base: Record<string, number>;
}

export interface PokemonPageContext {
  searchInput: null | RefObject<HTMLInputElement>;
  pokemons: Pokemon[];
}

interface PokemonPageStates {
  states: {
    loading: {};
    idle: {};
    typing: {};
  };
}

type PokemonPageEvents =
  | { type: "TYPING"; searchTerm: string }
  | { type: "done.invoke.loadPokemons"; data: Pokemon[] };

const pokemonPage: MachineConfig<
  PokemonPageContext,
  PokemonPageStates,
  PokemonPageEvents
> = {
  id: "page",
  initial: "loading",
  context: {
    pokemons: [],
    searchInput: null,
  },
  states: {
    loading: {
      invoke: {
        src: "loadPokemons",
        onDone: {
          target: "idle",
          actions: ["storePokemons"],
        },
      },
    },
    idle: {
      on: {
        TYPING: {
          target: "typing",
        },
      },
    },
    typing: {
      after: {
        450: {
          target: "idle",
        },
      },
      on: {
        TYPING: {
          target: "typing",
        },
      },
    },
  },
};

export const pokemonPageMachine = Machine(pokemonPage, {
  actions: {
    storePokemons: assign({
      pokemons: (ctx, evt) => {
        return evt.type === "done.invoke.loadPokemons"
          ? evt.data
          : ctx.pokemons;
      },
    }),
  },
  services: {
    loadPokemons: () => fetch("/pokemon.json").then((resp) => resp.json()),
  },
});
