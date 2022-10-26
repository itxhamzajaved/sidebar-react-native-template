import {StyleSheet} from 'react-native';
import Utilities from '../../Utility/UtilityMethods';

const makeStyles = ({colors}, width, height) =>
  StyleSheet.create({
    containerStyle: {
      width: width,
      height: height,
      borderRadius: Utilities.wp(50),
    },
  });

export default makeStyles;
