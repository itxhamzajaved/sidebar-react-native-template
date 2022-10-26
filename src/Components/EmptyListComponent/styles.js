import {StyleSheet} from 'react-native';
import Utilities from '../../Utility/UtilityMethods';

const makeStyles = ({colors}) =>
  StyleSheet.create({
    root: {
      display: 'flex',
      alignItems: 'center',
      height: Utilities.hp(80),
      justifyContent: 'center',
    },
  });

export default makeStyles;
