import { Box } from "@fower/react";
import { FaSearch } from "react-icons/fa";

function App() {
  return (
    <Box flex flexDirection="column" alignItems="center">
      <Box
        h-40vh
        w-100vw
        bgAmber50
        flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w-350px
          w-500px--sm
          w-600px--md
          w-700px--lg
          w-1000px--xl
          w-1000px-2xl
          flex
          flexDirection="row"
          justifyContent="center"
          shadowLG
        >
          <Box
            as="input"
            outlineNone
            p-1rem
            bgAmber100
            rose900
            fontBold
            w-300px
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
          <Box
            as="button"
            w-50px
            p-1rem
            bgAmber200
            rose900
            fontBold
            cursorPointer
            textSM
            textLG--sm
            textLG--md
            textXL--lg
            textXL--xl
            text2XL--2xl
          >
            <FaSearch />
          </Box>
        </Box>
      </Box>
      <Box h-60vh w-100vw bgCoolGray100></Box>
    </Box>
  );
}

export default App;
