import React from 'react';
import {Animated, View} from 'react-native';
import styles from './styles';

class ProgressiveImage extends React.Component {
  defaultImageAnimated = new Animated.Value(0);
  imageAnimated = new Animated.Value(0);

  handleDefaultImageLoad = () => {
    Animated.timing(this.defaultImageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  handleImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {defaultImageSource, source, style, containerStyle, ...props} =
      this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        <Animated.Image
          {...props}
          source={defaultImageSource}
          style={[style, {opacity: this.defaultImageAnimated}]}
          onLoad={this.handleDefaultImageLoad}
          blurRadius={1}
        />
        <Animated.Image
          {...props}
          source={source}
          style={[style, {opacity: this.imageAnimated}, styles.imageOverlay]}
          onLoad={this.handleImageLoad}
        />
      </View>
    );
  }
}

export {ProgressiveImage};
