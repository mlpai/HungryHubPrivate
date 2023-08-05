import { Color } from 'global/colors';
import React from 'react';
import { Text, View } from 'react-native';
import Styles from './index.styles';
import { IHeading } from './index.types';

const Heading = (props: IHeading) => {
  const {
    containerStyle,
    style,
    children,
    variant = 'h4',
    align = 'left',
    bold,
    color = Color.dark,
    numberOfLines = 0
  } = props;
  return (
    <View style={containerStyle}>
      <Text
        numberOfLines={numberOfLines}
        style={[
          { color, textAlign: align },
          Styles[variant],
          bold ? { fontWeight: bold } : null,
          style
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default Heading;
