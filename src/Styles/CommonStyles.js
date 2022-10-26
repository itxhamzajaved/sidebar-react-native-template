import {StyleSheet} from 'react-native';
import Utilities from '../Utility/UtilityMethods';

const CommonStyles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  alignCenter: {
    alignItems: 'center',
  },
  flexDirection: d => {
    return {flexDirection: d};
  },
  justifyCenter: {
    justifyContent: 'center',
  },

  fullPercentageWidth: {
    width: '100%',
  },
  fullWidth: {
    width: Utilities.wp(100),
  },
  height: {
    height: Utilities.hp(100),
  },

  widthInDP: width => {
    return {
      width: Utilities.wp(width),
    };
  },
  heightInDP: height => {
    return {
      height: Utilities.hp(height),
    };
  },

  setProperty: (key, value) => {
    return {
      [key]: value,
    };
  },
});

export default CommonStyles;
