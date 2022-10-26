import React from 'react';
import {useTheme} from 'react-native-paper';
import {ProfileFilled} from '../../Assets/Images';
import {ProgressiveImage} from '../ProgressiveImage';
import makeStyles from './styles';
import Utilities from '../../Utility/UtilityMethods';

const ProfileImage = ({image, width, height, style = {}}) => {
  let theme = useTheme();
  let styles = makeStyles(theme, width, height);

  return (
    <ProgressiveImage
      containerStyle={styles.containerStyle}
      source={
        image !== null && image !== ''
          ? {
              uri: image?.path ? image.path : image,
              cache: 'only-if-cached',
            }
          : ProfileFilled
      }
      resizeMode="cover"
      defaultImageSource={ProfileFilled}
      style={[style, {width, height}]}
    />
  );
};

export {ProfileImage};
