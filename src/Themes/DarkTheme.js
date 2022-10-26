import {DarkTheme as PaperDarkTheme} from 'react-native-paper';
import FontSize from './FontSize';

const DarkTheme = {
  ...PaperDarkTheme,
  dark: false, // true || false
  mode: 'adaptive', // exact || adaptive
  barStyle: 'light-content', // dark-content || light-content
  colors: {
    ...PaperDarkTheme.colors,
    background: '#202020',
    text: 'white',
    primary: '#CC922F',
    icon_color: '#ffffff',

    darkWithOpacity: opacity => `rgba(255, 255, 255, ${opacity})`,
  },
  icon_size: 22,
  FontSize,
};

export {DarkTheme};
