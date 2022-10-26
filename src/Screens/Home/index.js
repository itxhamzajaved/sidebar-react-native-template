import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Button, Space} from '../../Components';
import {useAppTheme} from '../../Contexts/ChangeThemeProvider';
import Routes from '../../Navigation/Routes';
import makeStyles from './styles';

const Home = ({navigation}) => {
  const theme = useTheme();
  const {isDarkMode, setDarkMode} = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.root}>
      <Space hp={2} />
      <Button
        text="Go to Settings Page"
        mode="contained"
        width="100%"
        onPress={() => navigation.navigate(Routes.SETTINGS)}
      />
      <Space hp={2} />
      <Button
        text="Change Theme"
        mode="contained"
        width="100%"
        onPress={() => setDarkMode(!isDarkMode)}
      />
    </View>
  );
};

export {Home};
