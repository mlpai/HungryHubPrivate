import Images from 'global/images';
import React, { ReactNode } from 'react';
import {
  GestureResponderEvent,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  View
} from 'react-native';
import styles from './index.styles';
import { ContainerProp } from './index.types';

const Container = (props: ContainerProp) => {
  const { enableBG, children, blurRadius = 0, safeArea, ...rest } = props;

  const performSideEffects = (e: GestureResponderEvent) => {
    e.stopPropagation();
    Keyboard.dismiss();
  };

  const safeView = (children: ReactNode) => {
    return safeArea ? <SafeAreaView>{children}</SafeAreaView> : children;
  };

  return (
    <View
      style={[styles.container]}
      {...rest}
      onStartShouldSetResponder={() => true}
      onResponderStart={performSideEffects}>
      {enableBG ? (
        <ImageBackground
          source={Images.authBG}
          blurRadius={blurRadius}
          style={[styles.containerImg, styles.container]}>
          {safeView(children)}
        </ImageBackground>
      ) : (
        safeView(children)
      )}
    </View>
  );
};

export default Container;
