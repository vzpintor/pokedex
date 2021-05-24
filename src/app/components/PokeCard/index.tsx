import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { homeStyles } from '@screens/Home/styles';
import { Card } from 'react-native-elements';
import { IPokeCardProps } from '@components/PokeCard/IPokeCardProps';

const PokeCard = ({ id, name, handlePress }: IPokeCardProps) => {
  const onPress = () => {
    console.log('onPress');
  };

  return (
    <TouchableOpacity onPress={handlePress || onPress} activeOpacity={0.5}>
      <Card containerStyle={homeStyles.container}>
        <Card.Image
          style={homeStyles.cardImage}
          source={{
            uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
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
