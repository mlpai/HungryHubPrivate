import React, { useRef } from 'react';
import { Animated, ImageRequireSource, PanResponder, View } from 'react-native';
import FastImage, { ImageStyle, Source } from 'react-native-fast-image';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

interface IBanner extends ImageStyle {
  source: Source | ImageRequireSource;
  onPress: () => unknown;
}

const Banner: React.FC<IBanner> = (props) => {
  const { source, onPress, ...rest } = props;
  const imageScale = useRef(new Animated.Value(1)).current;

  const onTap = () => {
    Animated.spring(imageScale, {
      toValue: 0.9,
      useNativeDriver: true
    }).start();
  };

  const onTapRelease = () => {
    Animated.spring(imageScale, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true
    }).start();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true, // Allow responder when gesture starts
    onPanResponderGrant: onTap,
    onPanResponderEnd: onTapRelease,
    onPanResponderTerminate: onTapRelease // Handle if the responder is terminated
  });

  return (
    <View style={{}}>
      <AnimatedFastImage
        {...panResponder.panHandlers}
        source={source}
        resizeMode={FastImage.resizeMode.cover}
        style={[
          {
            borderRadius: 10,
            overflow: 'hidden',
            height: 200,
            width: '100%'
          },
          {
            transform: [
              {
                scale: imageScale
              }
            ]
          }
        ]}
        {...rest}
      />
    </View>
  );
};

export default Banner;
