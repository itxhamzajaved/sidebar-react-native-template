import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import styles from './styles';

const HorizontalLine = ({
  stroke = 0.5,
  opacity = 0.6,
  width = '100%',
  ...props
}) => {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          borderWidth: stroke,
          borderColor: theme?.colors?.darkWithOpacity(opacity),
          width,
        },
        styles.horizontalLine,
      ]}
    />
  );
};

export {HorizontalLine};
