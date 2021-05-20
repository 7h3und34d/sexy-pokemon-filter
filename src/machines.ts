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
  filteredData: Pokemon[];
  hasMore: boolean;
}

interface PokemonPageStates {
  states: {
    loading: {};
    idle: {};
    typing: {};
    filtering: {};
    loading_more: {};
  };
}

type PokemonPageEvents =
  | { type: "LOAD_MORE" }
  | { type: "TYPING"; searchTerm: string }
  | { type: "done.invoke.filterPokemons"; data: [Pokemon[], boolean] }
  | { type: "done.invoke.loadMorePokemons"; data: [Pokemon[], boolean] }
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
    filteredData: [],
    hasMore: false,
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
        LOAD_MORE: {
          target: "loading_more",
        },
      },
    },
    typing: {
      after: {
        450: {
          target: "filtering",
        },
      },
      on: {
        TYPING: {
          target: "typing",
        },
      },
    },
    filtering: {
      invoke: {
        src: "filterPokemons",
        onDone: {
          target: "idle",
          actions: ["updateFilteredData"],
        },
      },
    },
    loading_more: {
      invoke: {
        src: "loadMorePokemons",
        onDone: {
          target: "idle",
          actions: ["updateFilteredData"],
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
      filteredData: (ctx, evt) => {
        return evt.type === "done.invoke.loadPokemons"
          ? evt.data.slice(0, 12)
          : ctx.filteredData;
      },
      hasMore: true,
    }),
    updateFilteredData: assign({
      filteredData: (ctx, evt) => {
        if (evt.type === "done.invoke.filterPokemons") {
          return evt.data[0];
        }
        if (evt.type === "done.invoke.loadMorePokemons") {
          return evt.data[0];
        }
        return ctx.filteredData;
      },
      hasMore: (ctx, evt) => {
        if (evt.type === "done.invoke.filterPokemons") {
          return evt.data[1];
        }
        if (evt.type === "done.invoke.loadMorePokemons") {
          return evt.data[1];
        }
        return ctx.hasMore;
      },
    }),
  },
  services: {
    loadPokemons: () => fetch("/pokemon.json").then((resp) => resp.json()),
    filterPokemons: (ctx) => {
      const searchTerm = ctx.searchInput?.current?.value.toLowerCase() || "";
      if (searchTerm === "") {
        return Promise.resolve([ctx.pokemons.slice(0, 12), true]);
      }
      const filtered = ctx.pokemons.filter((pokemon) =>
        pokemon.name.english.toLowerCase().includes(searchTerm)
      );
      return Promise.resolve([filtered.slice(0, 12), filtered.length > 12]);
    },
    loadMorePokemons: (ctx) => {
      const searchTerm = ctx.searchInput?.current?.value.toLowerCase() || "";
      if (searchTerm === "") {
        return Promise.resolve([
          ctx.pokemons.slice(0, ctx.filteredData.length + 12),
          ctx.filteredData.length + 12 < ctx.pokemons.length,
        ]);
      }
      const filtered = ctx.pokemons.filter((pokemon) =>
        pokemon.name.english.toLowerCase().includes(searchTerm)
      );
      return Promise.resolve([
        filtered.slice(0, ctx.filteredData.length + 12),
        ctx.filteredData.length + 12 < filtered.length,
      ]);
    },
  },
});
