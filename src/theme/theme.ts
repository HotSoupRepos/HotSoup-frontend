import { DefaultTheme } from "react-native-paper";

export interface CustomTheme {
  primary: string;
  secondary: string;
  text: {
    primary: string;
    secondary: string;
  };
  background: {
    primary: string;
    secondary: string;
  };
}

const customTheme: CustomTheme = {
  primary: "#FFC529",
  secondary: "#FEB74C",
  text: {
    primary: "#FFFFFF",
    secondary: "#000000",
  },
  background: {
    primary: "#000000",
    secondary: "#232323",
  },
};

const theme = {
  ...DefaultTheme,
  customTheme,
};

export default theme;
