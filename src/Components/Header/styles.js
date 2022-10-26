import {StyleSheet} from 'react-native';
import Utilities from '../../Utility/UtilityMethods';

const makeStyles = ({colors, FontSize}) =>
  StyleSheet.create({
    root: {
      width: Utilities.wp(95),
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: FontSize.heading,
    },
    backButtonView: {position: 'absolute', left: 0},
  });

export default makeStyles;
