import {StyleSheet} from 'react-native';
import Utilities from '../../Utility/UtilityMethods';

const styles = ({colors}) =>
  StyleSheet.create({
    root: {
      backgroundColor: colors.background,
      flex: 1,
    },
    connectAgainButton: {
      width: '100%',
    },
    innerRoot: {
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      width: Utilities.wp(90),
      marginVertical: Utilities.hp(8),
      flex: 1,
    },
  });

export default styles;
