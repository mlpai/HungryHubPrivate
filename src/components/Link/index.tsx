import React, { ReactNode } from 'react';
import { GestureResponderEvent, Text, TextStyle } from 'react-native';
import Styles from './index.styles';

interface ILink extends TextStyle {
  children: ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Link = (props: ILink) => {
  const { children, onPress, ...rest } = props;
  return (
    <Text onPress={onPress} style={[Styles.link, { ...rest }]}>
      {children}
    </Text>
  );
};

export default Link;
