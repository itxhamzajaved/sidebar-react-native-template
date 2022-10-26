import {StyleSheet} from 'react-native';
import Utilities from '../../Utility/UtilityMethods';

const makeStyles = ({colors}) =>
  StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: Utilities.wp(100),
    },
    innerRoot: {
      position: 'absolute',
      backgroundColor: colors.darkWithOpacity(0.4),
      width: Utilities.wp(100),
      height: Utilities.hp(100),
    },
    lottieView: {
      height: 100,
    },
  });

export default makeStyles;
