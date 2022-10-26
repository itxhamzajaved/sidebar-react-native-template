import {Platform, StatusBar} from 'react-native';

const styles = {
  safeArea: {
    marginBottom:
      Platform.OS === 'android' ? StatusBar?.currentHeight ?? 20 : 0,
  },
};

export default styles;
