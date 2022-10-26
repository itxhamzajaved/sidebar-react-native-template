import {StyleSheet} from 'react-native';
import Utilities from '../../Utility/UtilityMethods';

const makeStyles = ({dark, colors, FontSize}) =>
  StyleSheet.create({
    mainView: {
      width: Utilities.wp(90),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingVertical: 15,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.darkWithOpacity(0.3),
    },
    leftView: {
      flexDirection: 'row',
    },
    title: {
      fontSize: FontSize?.body_text,
      marginLeft: Utilities.wp(4),
    },
    headingTitle: {
      paddingVertical: 10,
      fontSize: FontSize?.body_text,
    },
    headingView: {
      backgroundColor: Utilities.hex2rgba(dark ? '#ffffff' : '#000000', 0.04),
    },
    lastItem: {
      borderBottomWidth: 0,
    },
  });

export default makeStyles;
