import React, { useEffect } from 'react';
import { Container } from '@components/Container';
import HeaderApp from '@components/HeaderApp';
import { Divider, Image } from 'react-native-elements';
import { detailStyles } from '@screens/PokemonDetail/styles';
import { Text, View } from 'react-native';
import { homeStyles } from '@screens/Home/styles';
import {
  cleanCurrentPokemon,
  cleanDetailPokemon,
  getPokemonDetail,
} from '@actions/pokemon/pokemonActions';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '@reduxInterfaces/rootStateInterface';
import { IStats } from '@shared/interface/IPokemon';
import PokeSlider from '@components/PokeSlider';

const { baseUrlAssets } = require('@environments/env');

const PokemonDetail = () => {
  const dispatch = useDispatch();

  const { pokemonDetail, currentPokemon } = useSelector(
    (state: IState) => state.pokemons,
  );

  useEffect(() => {
    if (!pokemonDetail.pokemon) {
      dispatch(getPokemonDetail());
    }
  }, [pokemonDetail.pokemon]);

  useEffect(() => {
    return () => {
      dispatch(cleanCurrentPokemon());
      dispatch(cleanDetailPokemon());
    };
  }, []);

  return (
    <>
      <HeaderApp back={true} />
      <Container unsafe={true}>
        <View style={detailStyles.container}>
          <View style={detailStyles.abilityContainer}>
            <Image
              style={homeStyles.cardImage}
              source={{
                uri: `${baseUrlAssets}${currentPokemon}.png`,
              }}
            />
            <View>
              <Text style={detailStyles.title}>#00{currentPokemon}</Text>
              <View style={{ flexDirection: 'column' }}>
                <Text style={detailStyles.title}>
                  Height:
                  <Text style={detailStyles.value}>
                    {pokemonDetail.pokemon?.height}m
                  </Text>
                </Text>
                <Text style={detailStyles.title}>
                  Weight:
                  <Text style={detailStyles.value}>
                    {pokemonDetail.pokemon?.weight}kg
                  </Text>
                </Text>
              </View>
            </View>
          </View>

          <Divider />

          <Text style={detailStyles.description}>
            {pokemonDetail.pokemon?.description}
          </Text>

          <View style={detailStyles.divider}>
            <Divider style={{ width: 100 }} />
            <Text>STATISTICS</Text>
            <Divider style={{ width: 100 }} />
          </View>

          <View>
            {pokemonDetail.pokemon &&
              pokemonDetail.pokemon.stats.map(({ stat, base_stat }: IStats) => (
                <PokeSlider
                  key={stat.name}
                  title={stat.name}
                  range={base_stat}
                  disabled={true}
                />
              ))}
          </View>
        </View>
      </Container>
    </>
  );
};

export default React.memo(PokemonDetail);
