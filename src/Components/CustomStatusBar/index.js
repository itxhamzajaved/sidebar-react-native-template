import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import styles from './styles';

const MyStatusBar = ({backgroundColor, ...props}) => {
  return (
    <View style={{backgroundColor}}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
};

export default MyStatusBar;
