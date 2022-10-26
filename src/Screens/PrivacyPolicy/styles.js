import {StyleSheet} from 'react-native';
import Utilities from '../../Utility/UtilityMethods';

const makeStyles = ({colors}) =>
  StyleSheet.create({
    root: {
      flex: 1,
      width: Utilities.wp(90),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      lineHeight: 20,
      marginTop: 20,
    },
  });

export default makeStyles;
