import { Metrics } from 'global/metrics';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  row: {
    width: '100%',
    flexGrow: 1,
    flexDirection: 'row'
  },
  leftRow: {
    width: '70%',
    paddingRight: Metrics.standardMargin,
    flexDirection: 'row'
  },
  rightRow: {
    paddingLeft: Metrics.standardMargin,
    width: '30%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    alignItems: 'center',
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.standardMargin
  },
  icon2: {
    paddingLeft: Metrics.standardMargin2x,
    paddingRight: Metrics.baseMargin
  },
  icon3: {
    paddingLeft: Metrics.standardMargin,
    paddingRight: Metrics.baseMargin
  }
});

export default Styles;
