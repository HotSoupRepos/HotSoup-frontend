import type CustomThemeColors from "./theme";

declare global {
  namespace ReactNativePaper {
    interface CustomTheme {
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
  }
}
