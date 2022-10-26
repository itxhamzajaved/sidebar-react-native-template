import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import makeStyles from './styles';
import CommonStyles from '../../Styles/CommonStyles';

const SettingsItem = ({
  IconImage,
  title,
  heading,
  onPress,
  lastItem,
  ...props
}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <>
      {heading ? (
        <View style={[styles.headingView, {...props}]}>
          <View
            style={[
              CommonStyles.widthInDP(90),
              CommonStyles.setProperty('alignSelf', 'center'),
            ]}>
            <Text style={styles.headingTitle}>{title}</Text>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.mainView, lastItem && styles.lastItem, {...props}]}
          onPress={onPress}>
          <View style={styles.leftView}>
            {IconImage && (
              <IconImage
                fill={theme?.colors?.icon_color}
                stroke={theme?.colors?.icon_color}
              />
            )}
            <Text style={styles.title}>{title}</Text>
          </View>
          <Icon
            name="chevron-right"
            color={theme?.colors?.icon_color}
            size={theme?.icon_size}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export {SettingsItem};
