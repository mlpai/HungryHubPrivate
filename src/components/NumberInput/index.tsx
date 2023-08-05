import { Color } from 'global/colors';
import { getTransparentColor } from 'global/helpers';
import React from 'react';
import { TextInput, View } from 'react-native';
import Header from '../Heading';
import Styles from './index.styles';

interface INumberInput {
  countryCode?: string;
  placeholder?: string;
  value?: string;
  onChange?: (text: string) => void | undefined;
}

const NumberInput = (props: INumberInput) => {
  const {
    countryCode,
    onChange,
    placeholder = 'Enter number here',
    value
  } = props;
  return (
    <View style={Styles.container}>
      <View style={Styles.spacer}>
        {countryCode ? <Header>{countryCode}</Header> : null}
      </View>
      <View style={Styles.fullWidth}>
        <TextInput
          maxLength={10}
          value={value}
          inputMode="numeric"
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={getTransparentColor(Color.dark, 0.4)}
          style={Styles.input}
        />
      </View>
    </View>
  );
};

export default NumberInput;
