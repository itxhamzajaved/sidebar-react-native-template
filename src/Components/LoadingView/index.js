import LottieView from 'lottie-react-native';
import React from 'react';
import {Modal, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Animations from '../../Assets/Animations';
import makeStyles from './styles';
const ANIM_SPEED = 1.5;

const LoadingView = ({visible}) => {
  let theme = useTheme();
  let styles = makeStyles(theme);
  return (
    <Modal transparent={visible} onRequestClose={() => null} visible={visible}>
      <View style={styles.innerRoot} />
      <View style={styles.root}>
        <LottieView
          speed={ANIM_SPEED}
          style={styles.lottieView}
          source={Animations.loader}
          autoPlay
          loop
        />
      </View>
    </Modal>
  );
};

export {LoadingView};
