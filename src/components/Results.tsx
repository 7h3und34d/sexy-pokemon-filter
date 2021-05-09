import { useEffect, useState } from "react";
import { Pokemon } from "../machines";
import { usePageCtx } from "../pageContext";
import Card from "./Card";

const Results = () => {
  const { value, searchInput, pokemons } = usePageCtx();
  const [results, setResults] = useState<Pokemon[]>([]);
  useEffect(() => {
    if (value !== "idle") {
      return;
    }
    const searchTerm = searchInput?.current?.value || "";
    if (value.length === 0) {
      setResults(pokemons.slice(0, 10));
    } else {
      setResults(
        pokemons
          .filter((p: Pokemon) => p.name.english.includes(searchTerm))
          .slice(0, 10)
      );
    }
  }, [value, searchInput, pokemons]);
  return (
    <>
      {results.map((result) => (
        <Card key={result.name.english} {...result} />
      ))}
    </>
  );
};

export default Results;
