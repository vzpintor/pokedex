import { Dimensions, StyleSheet } from 'react-native';

const { width: wWidth } = Dimensions.get('window');
const width = wWidth / 4.5;

export const detailStyles = StyleSheet.create({
  container: {
    margin: 25,
  },
  cardImage: {
    width: width,
    height: width,
  },
  abilityContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontWeight: 'bold',
  },
  value: {
    fontWeight: 'normal',
  },
  description: {
    textAlign: 'center',
    marginVertical: 10,
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  sliders: {},
});
