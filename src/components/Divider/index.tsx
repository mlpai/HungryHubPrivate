import { getPositiveNumber } from 'global/helpers';
import React, { ReactNode } from 'react';
import { TextStyle, View } from 'react-native';
import Header from '../Heading';
import { Bold, Varient } from '../Heading/index.types';
import Styles from './index.styles';

interface IDivider {
  children?: ReactNode;
  textStyle?: TextStyle;
  textVariant?: Varient;
  fontWeight?: Bold;
  /**
   * Max height 10;
   */
  lineHeight?: number;
}

const MAX_HEIGHT = 10;

const Divider = (props: IDivider) => {
  const {
    children,
    textVariant,
    fontWeight = 'normal',
    lineHeight = 1
  } = props;
  return (
    <View>
      <View style={Styles.row}>
        <View
          style={[
            Styles.line,
            { height: getPositiveNumber(lineHeight, MAX_HEIGHT) }
          ]}></View>
        {children ? (
          <Header
            variant={textVariant}
            containerStyle={Styles.containerText}
            bold={fontWeight}>
            {children}
          </Header>
        ) : null}
        <View
          style={[
            Styles.line,
            { height: getPositiveNumber(lineHeight, MAX_HEIGHT) }
          ]}></View>
      </View>
    </View>
  );
};

export default Divider;
