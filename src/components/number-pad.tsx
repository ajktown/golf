// src/NumberPad.js

import { FC, useCallback } from "react";
import { Button, Grid } from "@mui/material";

interface Props {
  input: number;
  setInput: (input: number) => void;
}

const NumberPad: FC<Props> = ({ input, setInput }) => {
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
    "*",
    "0",
    "Clear",
  ];

  const onClick = useCallback(
    (button: string) => {
      switch (button) {
        case "Clear":
          setInput(0);
          break;
        case "*":
          setInput(input * -1);
          break;
        default:
          const newInput = input * 10 + parseInt(button);
          setInput(newInput);
      }
    },
    [input, setInput],
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
