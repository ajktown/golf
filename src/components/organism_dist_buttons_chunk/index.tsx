import { Box, Stack, Typography } from "@mui/material";
import { FC, useCallback,useState } from "react";
import NumberPad from "../number-pad";

type Key =
  | "swings"
  | "teeHeight"
  | "swingType"
  | "ballAim"
  | "stability"
  | "carry"
  | "distance"
  | "ballSpeed"
  | "launchAngle"
  | "apex"
  | "hangTime"
  | "landingAngle"
  | "curve"
  | "offCenter";

type Value =
  | "string"
  | "number:0:90"
  | "number:0:999"
  | "center"
  | "left"
  | "right"
  | "front"
  | "back"
  | "inside"
  | "outside";

interface NumberValue {
  value: number;
  from: number;
  until: number;
}

interface SwingProps {
  swings: number;
  teeHeight: number;
  swingType: number;
  ballAim: number; // TODO: For now
  stability: number;
  carry: number;
  distance: number;
  ballSpeed: number;
  launchAngle: number;
  apex: number;
  hangTime: number;
  landingAngle: number;
  curve: number;
  offCenter: number;
}

const myDefault: SwingProps = {
  swings: 0,
  teeHeight: 0,
  swingType: 0,
  ballAim: 0,
  stability: 0,
  carry: 0,
  distance: 0,
  ballSpeed: 0,
  launchAngle: 0,
  apex: 0,
  hangTime: 0,
  landingAngle: 0,
  curve: 0,
  offCenter: 0,
};

const keys: Key[] = [
  "swings",
  "teeHeight",
  "swingType",
  "ballAim",
  "stability",
  "carry",
  "distance",
  "ballSpeed",
  "launchAngle",
  "apex",
  "hangTime",
  "landingAngle",
  "curve",
  "offCenter",
];
const maxKeyIndex = keys.length - 1;

const DistButtonChunk: FC = () => {
  const [swingProp, setSwingProp] = useState<SwingProps>(myDefault);
  const [keyIndex, setIndex] = useState<number>(0);
  const [input, setInput] = useState<number>(0);

  const keyNow = keys[keyIndex];

  const onReset = useCallback(() => {
    setInput(0);
    setIndex(0);
    setSwingProp(myDefault);
  }, []);

  const onEnter = useCallback(() => {
    setSwingProp((prev) => {
      const newValue = { ...prev };
      newValue[keyNow] = input;
      return newValue;
    });

    const nextKeyIndex = keyIndex + 1;
    if (maxKeyIndex < nextKeyIndex) onReset()
    else setIndex(keyIndex + 1);
  }, [keyNow, keyIndex, input, onReset]);

  return (
    <Stack alignItems={"center"} p={2}>
      <Typography>{keyNow + "?: " + input}</Typography>
      {/* Show Props */}
      <Stack direction={"row"} spacing={2} p={1}>
        {keys.map((key) => (
          <Typography key={key}>{key + `: ${swingProp[key]}`}</Typography>
        ))}
      </Stack>
      <Box p={1} />
      <NumberPad input={input} setInput={setInput} onEnter={onEnter} onReset={onReset}/>
    </Stack>
  );
};

export default DistButtonChunk;
