import { Color } from 'global/colors';
import { Metrics } from 'global/metrics';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  shadowContainer: {
    backgroundColor: Color.light, // Set the background color of the component
    shadowColor: Color.dark, // Color of the shadow
    shadowOffset: { width: 0, height: 2 }, // Offset of the shadow (x, y)
    shadowOpacity: 0.3, // Opacity of the shadow (0 to 1)
    shadowRadius: Metrics.standardRadius, // Radius of the shadow blur
    borderRadius: Metrics.standardRadius
  },
  row: {
    maxHeight: 70,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 70,
    borderTopLeftRadius: Metrics.standardRadius,
    borderBottomLeftRadius: Metrics.standardRadius,
    height: '100%'
  },
  icon: {
    paddingRight: Metrics.baseMargin
  },
  textContainer: {
    paddingLeft: Metrics.baseMargin,
    height: '100%',
    justifyContent: 'space-around'
  }
});

export default Styles;
