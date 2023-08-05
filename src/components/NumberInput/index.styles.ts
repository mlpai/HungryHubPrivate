import { Color } from 'global/colors';
import { getTransparentColor } from 'global/helpers';
import { Metrics } from 'global/metrics';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: Metrics.standardRadius,
    borderColor: getTransparentColor(Color.dark, 0.4)
  },
  spacer: {
    paddingLeft: Metrics.standardMargin,
    paddingRight: Metrics.baseMargin
  },
  input: {
    height: 40,
    fontWeight: '600',
    fontSize: Metrics.Font.h4
  },
  fullWidth: {
    flex: 1
  }
});

export default Styles;
