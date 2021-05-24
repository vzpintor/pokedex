import React, { useState } from 'react';
import { Container } from '@components/Container';
import HeaderApp from '@components/HeaderApp';
import { Divider, Image } from 'react-native-elements';
import { detailStyles } from '@screens/PokemonDetail/styles';
import { Text, View } from 'react-native';
import { homeStyles } from '@screens/Home/styles';
import PokeSlider from '@components/PokeSlider';

const PokemonDetail = () => {
  const [value, setValue] = useState<number>(25);

  return (
    <>
      <HeaderApp back={true} />
      <Container unsafe={true}>
        <View style={detailStyles.container}>
          <View style={detailStyles.abilityContainer}>
            <Image
              style={homeStyles.cardImage}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/1.png`,
              }}
            />
            <View>
              <Text style={detailStyles.title}>#001</Text>
              <View style={{ flexDirection: 'column' }}>
                <Text style={detailStyles.title}>
                  Height: <Text style={detailStyles.value}>0.7m</Text>
                </Text>
                <Text style={detailStyles.title}>
                  Weight: <Text style={detailStyles.value}>6.9kg</Text>
                </Text>
              </View>
            </View>
          </View>

          <Divider />

          <Text style={detailStyles.description}>
            Attacken die Schaden verursachen haben mit jedem Treffer eine 10%
            Chance das Ziel zurückschrecken zu lassen, wenn die Attacke dies
            nicht bereits als Nebeneffekt hat.\n\nDer Effekt stapelt nicht mit
            dem von getragenen Items.\n\nAußerhalb vom Kampf: Wenn ein Pokémon
            mit dieser Fähigkeit an erster Stelle im Team steht, tauchen wilde
            Pokémon nur halb so oft auf.
          </Text>

          <View style={detailStyles.divider}>
            <Divider style={{ width: 100 }} />
            <Text>STATISTICS</Text>
            <Divider style={{ width: 100 }} />
          </View>

          <View>
            <PokeSlider title={'HP'} range={10} disabled={true} />
            <PokeSlider title={'Attack'} range={15} disabled={true} />
            <PokeSlider title={'Defense'} range={20} disabled={true} />
            <PokeSlider title={'Speed'} range={25} disabled={true} />
            <PokeSlider title={'Sp Atk'} range={30} disabled={true} />
            <PokeSlider title={'Sp Def'} range={60} disabled={true} />
          </View>
        </View>
      </Container>
    </>
  );
};

export default PokemonDetail;
