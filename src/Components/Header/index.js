import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonStyles from '../../Styles/CommonStyles';
import makeStyles from './styles';

const Header = ({title, back, navigation, ...props}) => {
  let theme = useTheme();
  const styles = makeStyles(theme);
  // React.useEffect(() => {
  //   console.log(Object.keys(props));
  // }, []);
  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={[
          CommonStyles.flexDirection('row'),
          CommonStyles.alignCenter,
          styles.backButtonView,
        ]}
        onPress={() => navigation.goBack()}>
        <Icon
          name="chevron-left"
          color={theme.colors.text}
          size={theme?.icon_size + 10}
        />
        <Text style={styles.title}>Back</Text>
      </TouchableOpacity>
      <Text />
      <Text style={styles.title}>{props?.options?.title}</Text>
      <Text />
    </View>
  );
};

export default Header;
