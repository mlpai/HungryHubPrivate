import { Metrics } from 'global/metrics';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  h1: {
    fontSize: Metrics.Font.h1,
    fontWeight: '600',
    lineHeight: 1.2 * Metrics.Font.h1
  },
  h2: {
    fontSize: Metrics.Font.h2,
    fontWeight: '600',
    lineHeight: Metrics.Font.h1
  },
  h3: {
    fontSize: Metrics.Font.h3,
    fontWeight: '600',
    lineHeight: Metrics.Font.h3
  },
  h4: {
    fontSize: Metrics.Font.h4,
    fontWeight: '600'
  },
  h5: {
    fontSize: Metrics.Font.h5,
    fontWeight: '200'
  }
});

export default Styles;
