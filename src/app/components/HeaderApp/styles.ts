import {StyleSheet} from 'react-native';
import {palette} from '@theme/palette';

export const headerAppStyle = StyleSheet.create({
  alignCenter: {
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 30,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backTitle: {
    color: palette.white,
    fontSize: 16,
  },
});
