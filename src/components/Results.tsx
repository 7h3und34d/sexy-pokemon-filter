import { usePageCtx } from "../pageContext";
import Card from "./Card";
import NoResults from "./NoResults";
import { Box } from "@fower/react";
import { FaSpinner } from "react-icons/fa";

const Results = () => {
  const { filteredData, matches } = usePageCtx();
  if (matches("loading")) {
    return (
      <Box mt-100px h-300px color="#f9fafb" w="100%" toCenter text-52px>
        <FaSpinner />
      </Box>
    );
  }
  if (matches("idle") && filteredData.length === 0) {
    return (
      <Box w="100%" toCenter>
        <NoResults />
      </Box>
    );
  }
  return (
    <Box h="100%" w-100vw>
      <Box
        p-20
        gap-20
        grid
        gridTemplateColumns-1
        gridTemplateColumns-2--sm
        gridTemplateColumns-2--md
        gridTemplateColumns-2--lg
        gridTemplateColumns-3--xl
        gridTemplateColumns-4--2xl
        fontBold
        textXL
        bg="#374151"
      >
        {filteredData.map((result) => (
          <Card key={result.name.english} {...result} />
        ))}
      </Box>
    </Box>
  );
};

export default Results;
