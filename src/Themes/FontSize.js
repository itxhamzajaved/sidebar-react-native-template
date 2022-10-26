import {Platform, StatusBar, Dimensions} from 'react-native';
import Utilities from '../Utility/UtilityMethods';

// guideline height for standard 5" device screen is 680
function RFValue(fontSize, standardScreenHeight = 680) {
  const {height, width} = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

  const deviceHeight =
    Utilities.isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

const FontSize = {
  largeTitle: RFValue(30, Dimensions.get('window').height),
  title: RFValue(22, Dimensions.get('window').height),
  largeHeading: 20,
  heading: RFValue(18, Dimensions.get('window').height),
  body_text: RFValue(16, Dimensions.get('window').height),
  button_text: RFValue(14, Dimensions.get('window').height),
  text_field: RFValue(14, Dimensions.get('window').height),
  caption: RFValue(12, Dimensions.get('window').height),
};

export default FontSize;
