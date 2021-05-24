import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Container } from '@components/Container';
import HeaderApp from '@components/HeaderApp';
import Search from '@components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '@reduxInterfaces/rootStateInterface';
import { getPokemons } from '@actions/pokemon/pokemonActions';
import PokemonCard from '@components/PokeCard';
import { IPokemon } from '@shared/interface/IPokemon';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@utils/screens';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { dataAllPokemons } = useSelector(
    (state: IState) => state.pokemons.pokemonList,
  );

  useEffect(() => {
    if (!dataAllPokemons) {
      dispatch(getPokemons({ offset: 0, limit: 50 }));
    }
  }, [dataAllPokemons]);

  const handlePress = () => {
    console.log('handlePress');
    navigation.navigate(SCREENS.POKEMON_DETAIL);
  };

  const getPokeId = (pokemon: IPokemon): number => {
    const { url } = pokemon;
    const array = url.split('/');
    const id = array[array.length - 2];
    return parseInt(id, 10);
  };

  const pokemonCard = ({ item }: any) => {
    const id = getPokeId(item);
    return <PokemonCard id={id} name={item.name} handlePress={handlePress} />;
  };

  return (
    <>
      <HeaderApp />
      <Container unsafe={true} keyboardOffset={'none'}>
        <Search />
        {dataAllPokemons && (
          <FlatList
            data={dataAllPokemons.results}
            numColumns={3}
            renderItem={pokemonCard}
            keyExtractor={pokemon => pokemon.name}
            style={{ alignSelf: 'center' }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Container>
    </>
  );
};
export default Home;
