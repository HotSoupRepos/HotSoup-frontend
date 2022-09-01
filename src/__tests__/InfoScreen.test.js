import React from "react";
import { render } from "@testing-library/react-native";
import InfoScreen from '../screens/InfoScreen/InfoScreen';
import renderer from 'react-test-renderer';
import { ThemeProvider } from "styled-components/native";
import { theme } from "@theme";

it("renders default elements", () => {

    render(<ThemeProvider theme={theme}><InfoScreen /></ThemeProvider>)
});
