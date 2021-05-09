import { useMachine } from "@xstate/react";
import {
  createContext,
  FunctionComponent,
  KeyboardEvent,
  useCallback,
  useContext,
  useRef,
} from "react";
import { StateValue } from "xstate";
import { PokemonPageContext, pokemonPageMachine } from "./machines";

const PageCtx = createContext<
  | null
  | (PokemonPageContext & {
      value: StateValue;
      matches: (value: string) => boolean;
    } & {
      onChange: (event: KeyboardEvent<HTMLInputElement>) => void;
    })
>(null);

export const PageProvider: FunctionComponent<{}> = ({ children }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [machineData, send] = useMachine(
    pokemonPageMachine.withContext({ pokemons: [], searchInput: inputRef })
  );
  const onChangeHandler = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      send({ type: "TYPING", searchTerm: event.currentTarget.value });
    },
    [send]
  );
  return (
    <PageCtx.Provider
      value={{
        ...machineData.context,
        value: machineData.value,
        onChange: onChangeHandler,
        matches: machineData.matches,
      }}
    >
      {children}
    </PageCtx.Provider>
  );
};

export const usePageCtx = () => {
  const machineOps = useContext(PageCtx);
  if (machineOps === null) {
    throw Error("context was not initialized correctly!");
  }
  return machineOps;
};
