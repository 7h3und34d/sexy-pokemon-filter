import { Box } from "@fower/react";
import { keyframes } from "@fower/core";
import { FaTimesCircle } from "react-icons/fa";
import { usePageCtx } from "../pageContext";

const fadein = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(40px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const NoResults = (): JSX.Element => {
  const { searchInput } = usePageCtx();
  return (
    <Box
      bg="#f3f4f6"
      shadow2XL--hover
      shadowLG
      w-250px
      w-300px--sm
      w-350px--md
      w-400px--lg
      w-450px--xl
      m-10
      p-10
      roundedXL
      css={{
        transition: "all 0.3s",
        animation: `${fadein} 0.3s ease`,
        ":hover": { transform: "scale(1.05)" },
      }}
      flex
      column
      toCenter
    >
      <Box mb-5px text-50px>
        <FaTimesCircle />
      </Box>
      <Box uppercase mb-15px text-16px textSM--md textXL--2xl fontBold>
        No Results found
      </Box>
      <Box textAlign="center" text-16px textSM--md textXL--2xl fontBold>
        No pokemon with {`"${searchInput?.current?.value || "empty string"}"`}{" "}
        in its name found
      </Box>
    </Box>
  );
};

export default NoResults;
