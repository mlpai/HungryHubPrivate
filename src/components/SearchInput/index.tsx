import BouncyText from 'components/BouncyText';
import { Color } from 'global/colors';
import { Metrics } from 'global/metrics';
import React from 'react';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './index.styles';

interface ISearchInput {
  onPress: ((e: NativeSyntheticEvent<NativeTouchEvent>) => void) | undefined;
}

const SearchInput = (props: ISearchInput) => {
  const { onPress } = props;
  return (
    <View>
      <View style={Styles.inputRow}>
        <View style={Styles.icon}>
          <Icon
            color={Color.primary}
            name="search"
            size={Metrics.Icon.medium}
          />
        </View>
        <View style={Styles.input}>
          <BouncyText textArray={['Coffee', 'Tea', 'Snacks']} />
        </View>
        <View style={Styles.row}>
          <View style={Styles.rightIcon}>
            <Text style={Styles.iconTextColor}>|</Text>
          </View>
          <Icon
            color={Color.primary}
            name="microphone"
            size={Metrics.Icon.medium}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchInput;
