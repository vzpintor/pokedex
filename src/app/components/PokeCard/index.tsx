import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { homeStyles } from '@screens/Home/styles';
import { Card } from 'react-native-elements';
import { IPokeCardProps } from '@components/PokeCard/IPokeCardProps';
import { SCREENS } from '@utils/screens';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCurrentPokemon } from '@actions/pokemon/pokemonActions';

const { baseUrlAssets } = require('@environments/env');

const PokeCard = ({ id, name }: IPokeCardProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goToDetail = () => {
    dispatch(setCurrentPokemon(id));
    navigation.navigate(SCREENS.POKEMON_DETAIL);
  };

  return (
    <TouchableOpacity onPress={goToDetail} activeOpacity={0.5}>
      <Card containerStyle={homeStyles.container}>
        <Card.Image
          style={homeStyles.cardImage}
          source={{
            uri: `${baseUrlAssets}${id}.png`,
          }}
        />
        <Card.Divider />
        <Card.Title>
          <Text>{name}</Text>
        </Card.Title>
      </Card>
    </TouchableOpacity>
  );
};

export default React.memo(PokeCard, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
