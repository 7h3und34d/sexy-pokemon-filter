import { usePageCtx } from "../pageContext";
import Card from "./Card";

const Results = () => {
  const { filteredData } = usePageCtx();
  return (
    <>
      {filteredData.map((result) => (
        <Card key={result.name.english} {...result} />
      ))}
    </>
  );
};

export default Results;
