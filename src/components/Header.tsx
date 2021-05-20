import { Box } from "@fower/react";
import { FunctionComponent } from "react";

const Header: FunctionComponent<{}> = ({ children }) => {
  return (
    <Box
      h-100px
      w-100vw
      bg="#a1a1aa"
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
