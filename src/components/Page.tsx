import { Box } from "@fower/react";
import { FunctionComponent, ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page: FunctionComponent<PageProps> = ({ children }) => {
  return (
    <Box flex flexDirection="column" alignItems="center">
      {children}
    </Box>
  );
};

export default Page;
