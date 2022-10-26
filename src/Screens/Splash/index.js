import React from 'react';
import {View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import makeStyles from './styles';
import Routes from '../../Navigation/Routes';

const Splash = props => {
  const {navigation} = props;
  let theme = useTheme();
  let styles = makeStyles(theme.colors);

  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace(Routes.LOGIN);
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export {Splash};
