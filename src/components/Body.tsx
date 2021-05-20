import { Box } from "@fower/react";
import { FunctionComponent } from "react";

const Body: FunctionComponent<{}> = ({ children }) => {
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
        {children}
      </Box>
    </Box>
  );
};

export default Body;
