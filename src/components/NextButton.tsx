import { Box } from "@fower/react";
import { usePageCtx } from "../pageContext";
import { FaSpinner } from "react-icons/fa";

const NextButton = (): JSX.Element => {
  const { onNext, hasMore, matches } = usePageCtx();
  if (matches("loading_more")) {
    return (
      <Box w="100%" h-100px flex toCenter>
        Loading <FaSpinner />
      </Box>
    );
  }
  if (hasMore) {
    return (
      <Box w="100%" h-100px flex toCenter>
        <Box
          as="button"
          bg="#fef3c7"
        color="#881337"
          textXL
          p-22px
          rounded2XL
          shadowLG
          cursorPointer
          onClick={onNext}
        >
          Load more
        </Box>
      </Box>
    );
  }

  return <Box />;
};

export default NextButton;
