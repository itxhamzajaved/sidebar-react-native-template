import React from 'react';
import {View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import makeStyles from './styles';

const DefaultScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.root}>
      <Text>Default Screen</Text>
    </View>
  );
};

export {DefaultScreen};
