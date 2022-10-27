import "styled-components/native";
import { theme, type ThemeColors } from "@theme";

type ThemeInterface = typeof theme;

declare module "styled-components/native" {
  interface DefaultTheme extends ThemeInterface {}
}
