export interface IThemeColors {
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

const customColors: IThemeColors = {
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

export default customColors;
