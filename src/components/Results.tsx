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
    const searchTerm = searchInput?.current?.value.toLowerCase() || "";
    console.log(searchTerm);
    if (value.length === 0) {
      setResults(pokemons.slice(0, 12));
    } else {
      setResults(
        pokemons
          .filter((p: Pokemon) => p.name.english.toLowerCase().includes(searchTerm))
          .slice(0, 12)
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
