import { Dimensions, StyleSheet } from 'react-native';
import { shadow } from '@utils/styles';

const { width: wWidth } = Dimensions.get('window');
const width = wWidth / 4.5;

export const homeStyles = StyleSheet.create({
  container: {
    ...shadow,
    margin: 5,
    paddingVertical: 0,
  },
  cardImage: {
    width: width,
    height: width,
  },
});
