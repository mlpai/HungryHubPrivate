import { Color } from 'global/colors';
import { Metrics } from 'global/metrics';
import React from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Heading';
import Styles from './index.styles';

interface IButton {
  /**
   * Button label
   */
  title?: string;
  textColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
  icon?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  /**
   * Inverse the background color to text and textColor to background
   * */
  inverse?: boolean;
}

const Button = (props: IButton) => {
  const {
    title,
    backgroundColor,
    onPress,
    textColor,
    disabled = false,
    icon,
    inverse
  } = props;

  const colorText = textColor ?? Color.light;
  const bgColor = disabled ? Color.disabled : backgroundColor ?? Color.primary;

  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
          Styles.container,
          {
            backgroundColor: inverse ? textColor : bgColor,
            flexDirection: 'row'
          }
        ]}>
        {icon ? (
          <View style={Styles.iconContainer}>
            <Icon
              name={icon}
              size={Metrics.Icon.xl}
              color={inverse ? bgColor : colorText}
            />
          </View>
        ) : null}
        {title ? (
          <Header color={inverse ? bgColor : colorText}> {title} </Header>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
