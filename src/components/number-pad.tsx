// src/NumberPad.js

import { FC, useCallback } from "react";
import { Button, Grid } from "@mui/material";

interface Props {
  input: number;
  setInput: (input: number) => void;
  onReset: () => void;
  onEnter: () => void;
}

const buttons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "Reset",
  "0",
  "Enter",
];

const NumberPad: FC<Props> = ({ input, setInput, onEnter, onReset }) => {
  const onClick = useCallback(
    (button: string) => {
      switch (button) {
        case "Reset":
          onReset();
          setInput(0);
          break;
        case "Enter":
          onEnter();
          setInput(0);
          break;
        case "*":
          setInput(input * -1);
          break;
        default:
          setInput(input * 10 + parseInt(button));
      }
    },
    [input, setInput, onReset, onEnter],
  );

  return (
    <Grid container spacing={1} style={{ maxWidth: "200px" }}>
      {buttons.map((button) => (
        <Grid item xs={4} key={button}>
          <Button variant="contained" fullWidth onClick={() => onClick(button)}>
            {button}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default NumberPad;
