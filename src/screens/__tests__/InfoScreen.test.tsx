import React from "react";
import ReactTestRenderer from "react-test-renderer";
import InfoScreen from "../InfoScreen/InfoScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@theme";

it("renders default elements", () => {
  ReactTestRenderer.create(
    <ThemeProvider theme={theme}>
      <InfoScreen />
    </ThemeProvider>
  );
});
