import { getSwingsApi, ISwing } from "@/api/swings/get-swings.api";
import StyledTextButtonAtom from "@/atoms/StyledTextButton";
import { Box, Stack, Typography } from "@mui/material";
import { FC, Fragment, useCallback, useEffect, useState } from "react";
import NumberPad from "../number-pad";

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
