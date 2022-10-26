import {View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Animations from '../../Assets/Animations';
import Utilities from '../../Utility/UtilityMethods';
import {useTheme} from 'react-native-paper';
import makeStyles from './styles';

const ANIM_SPEED = 1.5;

const EmptyListComponent = ({loading}) => {
  let theme = useTheme();
  let styles = makeStyles(theme);
  return (
    <>
      {!loading && (
        <View style={styles.root}>
          <LottieView
            speed={ANIM_SPEED}
            style={{
              width: Utilities.wp(60),
            }}
            source={Animations.noData}
            autoPlay
            loop
          />
        </View>
      )}
    </>
  );
};

export {EmptyListComponent};
