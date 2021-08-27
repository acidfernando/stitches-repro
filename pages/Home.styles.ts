import { styled } from "../stitches.config";

export const Child = styled("div", {
  color: "red",
});

export const Box = styled("div", {});

export const HomeRoot = styled(Box, {
  height: "50px",

  [`& ${Child}`]: {
    backgroundColor: "blue",
  },
});
