import React, { useCallback, useEffect } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { Container } from '@components/Container';
import HeaderApp from '@components/HeaderApp';
import Search from '@components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '@reduxInterfaces/rootStateInterface';
import { getPokemons } from '@actions/pokemon/pokemonActions';
import PokemonCard from '@components/PokeCard';
import { IPokemon, IPokemonFilter } from '@shared/interface/IPokemon';
import usePaginator from '@hooks/usePaginator';
import { Button } from 'react-native-elements';

const { itemsPerPage } = require('@environments/env');

const Home = () => {
  const dispatch = useDispatch();

  const { paginatorState, paginatorDispatch, ACTIONS } = usePaginator();
  const { limit, offset } = paginatorState;

  const { dataAllPokemons, errorAllPokemons } = useSelector(
    (state: IState) => state.pokemons.pokemonList,
  );

  const handleSearch = (search: string) => {
    const params: IPokemonFilter = {
      search,
      limit,
      offset,
    };
    dispatch(getPokemons(params));
  };

  useEffect(() => {
    if (errorAllPokemons) {
      Alert.alert('', errorAllPokemons);
    }
  }, [errorAllPokemons]);

  useEffect(() => {
    if (!dataAllPokemons) {
      dispatch(getPokemons({ offset, limit }));
    }
  }, [dataAllPokemons]);

  const getPokeId = (pokemon: IPokemon): number => {
    const { url } = pokemon;
    const array = url.split('/');
    const id = array[array.length - 2];
    return parseInt(id, 10);
  };

  const pokemonCard = useCallback(
    ({ item }: any) => {
      const id = getPokeId(item);
      return <PokemonCard id={id} name={item.name} />;
    },
    [dataAllPokemons],
  );

  const handleLoadMore = () => {
    const newLimit = limit + itemsPerPage;

    paginatorDispatch({
      type: ACTIONS.UPDATE_PAGE,
      payload: newLimit,
    });

    const params: IPokemonFilter = {
      limit: newLimit,
      offset,
    };

    dispatch(getPokemons(params));
  };

  const loadFooter = () => {
    if (dataAllPokemons?.next) {
      return (
        <View style={{ padding: 25 }}>
          <Button
            onPress={handleLoadMore}
            title="Cargar mas elementos"
            type="outline"
            buttonStyle={{ borderColor: 'black' }}
            titleStyle={{ color: 'black' }}
          />
        </View>
      );
    }
    return <></>;
  };

  return (
    <>
      <HeaderApp />
      <Container unsafe={true}>
        <Search onSearch={handleSearch} />
        {dataAllPokemons && (
          <FlatList
            initialNumToRender={12}
            data={dataAllPokemons.results || dataAllPokemons.forms}
            numColumns={3}
            horizontal={false}
            renderItem={pokemonCard}
            keyExtractor={pokemon => pokemon.name}
            style={{ alignSelf: 'center' }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={loadFooter}
          />
        )}
      </Container>
    </>
  );
};
export default Home;
