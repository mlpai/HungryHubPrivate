import { Color } from 'global/colors';
import { getTransparentColor } from 'global/helpers';
import { Metrics } from 'global/metrics';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: Metrics.standardRadius,
    borderColor: getTransparentColor(Color.dark, 0.4),
    paddingHorizontal: Metrics.standardMargin
  },
  icon: {
    flexDirection: 'row',
    paddingRight: Metrics.standardMargin
  },
  input: {
    flex: 1,
    height: 40
  },
  row: {
    flexDirection: 'row'
  },
  rightIcon: {
    paddingHorizontal: Metrics.standardMargin
  },
  iconTextColor: {
    color: Color.disabled
  }
});

export default Styles;
