import { Color } from 'global/colors';
import { getTransparentColor } from 'global/helpers';
import { Metrics } from 'global/metrics';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  scroll: {
    width: '100%'
  },
  container: {
    flex: 1
  },
  main: {
    flexGrow: 1,
    paddingVertical: Metrics.standardMargin2x,
    paddingHorizontal: Metrics.standardMargin
  },
  box: {
    backgroundColor: getTransparentColor(Color.light, 0.97)
  },
  divider: {
    paddingVertical: Metrics.standardMargin2x
  },
  social: {
    marginTop: Metrics.standardMargin2x,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default Styles;
