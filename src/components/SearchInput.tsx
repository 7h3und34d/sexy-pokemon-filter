import { Box } from "@fower/react";
import { FunctionComponent } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import { usePageCtx } from "../pageContext";

const Container: FunctionComponent<{}> = ({ children }) => {
  return (
    <Box
      w-300px
      w-500px--sm
      w-600px--md
      w-700px--lg
      w-1000px--xl
      w-1000px--2xl
      flex
      flexDirection="row"
      justifyContent="center"
      shadowLG
      roundedLG
    >
      {children}
    </Box>
  );
};

const SearchInput: FunctionComponent<{}> = () => {
  const { matches, onChange, searchInput } = usePageCtx();
  return (
    <Container>
      <Box
        w-50px
        p-1rem
        bg="#fef3c7"
        color="#881337"
        fontBold
        textSM
        textLG--sm
        textLG--md
        textXL--lg
        textXL--xl
        text2XL--2xl
        roundedLLG
      >
        {matches("typing") ? <FaSpinner /> : <FaSearch />}
      </Box>
      <Box
        onChange={onChange}
        roundedRLG
        css={{ ":focus": { backgroundColor: "#fde68a" } }}
        ref={searchInput}
        as="input"
        outlineNone
        p-1rem
        bg="#fef3c7"
        color="#881337"
        fontBold
        w-250px
        w-450px--sm
        w-550px--md
        w-650px--lg
        w-950px--xl
        w-950px--2xl
        textSM
        textLG--sm
        textLG--md
        textXL--lg
        textXL--xl
        text2XL--2xl
      />
    </Container>
  );
};

export default SearchInput;
