import { Color } from 'global/colors';
import { getTransparentColor } from 'global/helpers';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  line: {
    flex: 1,
    backgroundColor: getTransparentColor(Color.dark, 0.4)
  },
  containerText: {
    paddingHorizontal: 10
  }
});

export default Styles;
