import LottieView from 'lottie-react-native';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Animations from '../../Assets/Animations';
import CommonStyles from '../../Styles/CommonStyles';
import {Button} from '../Button';
import makeStyles from './styles';

const ANIM_SPEED = 1.5;

const NoInternetConnection = ({connectAgain}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.innerRoot}>
        <LottieView
          speed={ANIM_SPEED}
          style={[CommonStyles.widthInDP(60)]}
          source={Animations.noConnectionLoader}
          autoPlay
          loop
        />
        <Button
          text={'Connect Again'}
          mode="contained"
          onPress={connectAgain}
          style={styles.connectAgainButton}
        />
      </View>
    </SafeAreaView>
  );
};

export {NoInternetConnection};
