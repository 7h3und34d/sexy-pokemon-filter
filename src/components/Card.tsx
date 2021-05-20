import { Box } from "@fower/react";
import { Pokemon } from "../machines";
import { keyframes } from "@fower/core";

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

const leftShift = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(-30px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0px)",
  },
});

const rightShift = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(30px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0px)",
  },
});

interface BaseRowProps {
  label: string;
  value: string;
}

const BaseRow = ({ label, value }: BaseRowProps) => {
  return (
    <>
      <Box fontBold css={{ animation: `${leftShift} 0.3s linear` }}>
        {label}
      </Box>
      <Box textAlign="end" css={{ animation: `${rightShift} 0.3s linear` }}>
        {value}
      </Box>
    </>
  );
};

const Card = ({
  name,
  type,
  base,
}: Pick<Pokemon, "name" | "type" | "base">): JSX.Element => {
  const imageSrc = `/pokemons/${name.english.toLowerCase()}.jpg`;
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
      <Box
        mb-16px
        backgroundImage={`url(${imageSrc})`}
        backgroundSize="cover"
        border-3px
        borderColor="#374151"
        circle-50
        circle-112px--sm
        circle-130px--md
        circle-350px--lg
      />
      <Box text-32px text-50px--lg fontBold>
        {name.english}
      </Box>
      <Box text-16px text-32px--lg mt-10>
        {type.join(", ")}
      </Box>
      <Box text-16px text-32px--lg grid gridTemplateColumns-2 gap-10 mt-10>
        {Object.keys(base).map((k) => (
          <BaseRow key={k} label={k} value={base[k].toString()} />
        ))}
      </Box>
    </Box>
  );
};

export default Card;
