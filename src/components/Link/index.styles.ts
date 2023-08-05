import { Color } from 'global/colors';
import { Metrics } from 'global/metrics';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  link: {
    fontSize: Metrics.Font.h4,
    fontWeight: 'normal',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    fontStyle: 'italic',
    color: Color.link
  }
});

export default Styles;
