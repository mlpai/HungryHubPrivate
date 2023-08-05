import { Metrics } from 'global/metrics';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  topPadding: {
    paddingTop: Metrics.standardMargin
  },
  bottomPadding: {
    paddingBottom: Metrics.standardMargin
  },
  defaultPadding: {
    paddingVertical: Metrics.standardMargin
  }
});

export default Styles;
