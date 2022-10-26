import { Colors, DefaultTheme } from "react-native-paper";
import FontSize from "./FontSize";

const LightTheme = {
  ...DefaultTheme,
  dark: false, // true || false
  mode: "adaptive", // exact || adaptive
  barStyle: "dark-content", // dark-content || light-content
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
    text: Colors.black,
    primary: "#CC922F",
    icon_color: "#707070",

    darkWithOpacity: (opacity) => `rgba(0,0,0, ${opacity})`,
  },
  icon_size: 22,
  FontSize,
};

export { LightTheme };
