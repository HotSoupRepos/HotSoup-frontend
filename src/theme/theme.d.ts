import { CustomTheme } from "./theme";

declare global {
  namespace ReactNativePaper {
    interface Theme {
      customTheme: CustomTheme;
    }
  }
}
