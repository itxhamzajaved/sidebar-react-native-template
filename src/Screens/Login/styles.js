import {StyleSheet} from 'react-native';
import Utilities from '../../Utility/UtilityMethods';

const makeStyles = ({colors, FontSize}) =>
  StyleSheet.create({
    root: {
      flex: 1,
      width: Utilities.wp(90),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    errorMessage: {
      color: colors.error,
      paddingTop: 2,
      fontSize: FontSize.caption,
    },
  });

export default makeStyles;
