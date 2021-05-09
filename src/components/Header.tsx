import { Box } from "@fower/react";
import { FunctionComponent } from "react";

const Header: FunctionComponent<{}> = ({ children }) => {
  return (
    <Box
      h-40vh
      w-100vw
      bgAmber50
      flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};

export default Header;
