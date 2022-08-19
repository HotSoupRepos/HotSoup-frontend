import customColors, { type IThemeColors } from "./colors";
import { fonts, fontSizes, type IFonts, type IFontSizes } from "./typography";

interface ITheme {
  customColors: IThemeColors;
  fonts: IFonts;
  fontSizes: IFontSizes;
}

const theme: ITheme = {
  customColors,
  fonts,
  fontSizes,
};

export { theme };
