import React from 'react';
import {
  ActivityIndicator,
  Button as PaperButton,
  Colors,
} from 'react-native-paper';
import styles from './styles';

const Button = ({
  text,
  style,
  labelStyle,
  roundness,
  theme,
  height,
  width,
  loading,
  ...props
}) => {
  return (
    <PaperButton
      style={[styles.buttonStyle, {height, width}, style]}
      labelStyle={[styles.labelStyle, labelStyle]}
      theme={{roundness: roundness ?? 50, ...theme}}
      raised
      loading={loading}
      {...props}>
      {text}
    </PaperButton>
  );
};

export {Button};
