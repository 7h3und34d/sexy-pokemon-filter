import { Box, Image } from "@fower/react";
import { Pokemon } from "../machines";
import { keyframes } from "@fower/core";

const fadein = keyframes({
     '0%': {
        opacity: 0,
        transform: 'translateY(40px)',
    },
    '100%': {
        opacity: 1,
        transform: 'translateY(0)',
    }
});

const Card = ({
  name,
  type,
  base,
}: Pick<Pokemon, "name" | "type" | "base">): JSX.Element => {
  const imageSrc = `/pokemons/${name.english.toLowerCase()}.jpg`;
  return (
    <Box
      cursorPointer
      shadowXL--hover
      shadowMD
      p-10
      border-1
      borderGray500
      roundedXL
      grid
      gap-10
      grid-35-65
      css={{ transition: "all 0.3s", animation: `${fadein} 1s ease` }}
    >
      <Box grid gridTemplateColumns-2 gap-10>
        <Box>
          <Box textXL fontBold>
            {name.english}
          </Box>
          <Box textXL fontBold>
            {name.japanese}
          </Box>
        </Box>
        <Image src={imageSrc} width="100%" />
      </Box>
      <Box textLG mt-10>
        {type.join(", ")}
      </Box>
      <Box grid gridTemplateColumns-2 gap-10 mt-10>
        {Object.keys(base).map((k) => (
          <>
            <Box textSM fontBold>
              {k}
            </Box>
            <Box textSM>{base[k]}</Box>
          </>
        ))}
      </Box>
    </Box>
  );
};

export const Card01: React.FunctionComponent<Pokemon> = ({
  name,
  type,
  base,
}) => (
  <Box p-10 border-1 borderGray500 roundedXL grid gap-10 grid-30-70>
    <Box>
      <Box grid gridTemplateColumns-2 gap-10>
        <Box>
          <Box textXL fontBold>
            {name.english}
          </Box>
          <Box textXL fontBold>
            {name.japanese}
          </Box>
        </Box>
        {/*<Box>
          <PillButton
            onClick={() => onSelected(name.english)}
            selected={selected}
          >
            Select
          </PillButton>
      </Box>*/}
      </Box>
      <Box textLG mt-10>
        {type.join(", ")}
      </Box>
      <Box grid gridTemplateColumns-2 gap-10 ml-20 mt-10>
        {Object.keys(base).map((k) => (
          <>
            <Box textSM fontBold>
              {k}
            </Box>
            <Box textSM>{base[k]}</Box>
          </>
        ))}
      </Box>
    </Box>
  </Box>
);

export default Card;
