import { GestureResponderEvent } from 'react-native';

export interface IPokeCardProps {
  id: number;
  name: string;
  handlePress?: (event: GestureResponderEvent) => void;
}
