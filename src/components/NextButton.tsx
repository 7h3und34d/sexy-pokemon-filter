import { Box } from "@fower/react";
import { usePageCtx } from "../pageContext";
import { FaSpinner } from "react-icons/fa";

const NextButton = (): JSX.Element => {
  const { onNext, hasMore, matches } = usePageCtx();
  if (hasMore) {
    return (
      <Box bg="#a1a1aa" w="100%" h-100px flex toCenter>
        <Box
          fontBold
          as="button"
          bg="#d4d4d8"
          color="#111827"
          textXL
          p-22px
          rounded2XL
          shadowLG
          cursorPointer
          onClick={onNext}
        >
          Load more {matches("loading_more") ? <FaSpinner /> : null}
        </Box>
      </Box>
    );
  }

  return <Box />;
};

export default NextButton;
