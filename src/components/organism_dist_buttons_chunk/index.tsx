import { getSwingsApi, ISwing } from "@/api/swings/get-swings.api";
import StyledTextButtonAtom from "@/atoms/StyledTextButton";
import { Box, Stack, Typography } from "@mui/material";
import { FC, Fragment, useCallback, useEffect, useState } from "react";
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
  value: number
  from: number
  until: number
}

interface Props {
  swings: number;
  teeHeight: number;
  swingType: number;
  ballAim: "center" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
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

const myDefault: Props = {
  swings: 0,
  teeHeight: 0,
  swingType: 0,
  ballAim: "center",
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
}

const findClosestKeys = (map: Map<number, ISwing>, input: number): ISwing[] => {
  const sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);

  let closestKeys = [];
  let lowerBound = input;
  let upperBound = input;

  while (closestKeys.length < 2) {
    if (sortedKeys.includes(lowerBound)) closestKeys.push(lowerBound);
    if (sortedKeys.includes(upperBound) && lowerBound !== upperBound)
      closestKeys.push(upperBound);

    lowerBound--;
    upperBound++;
  }

  return closestKeys.map((key) => map.get(key)!);
};

const DistButtonChunk: FC = () => {
  const [data, setData] = useState<Map<number, ISwing> | null>(null);
  const [input, setInput] = useState<number>(0);
  const [selectedSwings, selectSwings] = useState<ISwing[]>([]);

  useEffect(() => {
    const result = getSwingsApi();
    const map = new Map<number, ISwing>();
    result.swings.forEach((swing) => {
      map.set(swing.total, swing);
    });
    setData(map);
  }, []);

  useEffect(() => {
    if (input === 0) return selectSwings([]);
    if (data === null) return;

    // find two closest with the data:
    selectSwings(findClosestKeys(data, input));
  }, [data, input]);

  return (
    <Stack alignItems={"center"} p={2}>
      {input}
      <Box p={1} />
      <NumberPad input={input} setInput={setInput} />
      {selectedSwings.map((swing) => (
        <Fragment
          key={swing.club + swing.grip + swing.stanceDistance + swing.swingType}
        >
          <Typography>
            {"Club: "}
            <b>{swing.club}</b>
            {" Grip: "}
            <b>{swing.grip}</b>
            {" Stance: "}
            <b>{swing.stanceDistance}</b>
            {" Carry (Distance): "}
            <b>
              {swing.carry + " "} {"(" + swing.total + ")"} {}
            </b>
            {" Missing: "}
            <b>{input - swing.total}</b>
          </Typography>
        </Fragment>
      ))}
    </Stack>
  );
};

export default DistButtonChunk;
