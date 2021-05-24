import React, { useState } from 'react';
import { isIOS } from 'react-native-elements/dist/helpers';
import { SearchBar } from 'react-native-elements';
import { ISearchProps } from '@components/Search/ISearchProps';

const Search = ({ onSearch }: ISearchProps) => {
  const [search, setSearch] = useState<string>('');

  return (
    <SearchBar
      platform={isIOS ? 'ios' : 'android'}
      placeholder="Type Here..."
      onChangeText={setSearch}
      value={search}
      returnKeyType={'search'}
      onSubmitEditing={() => onSearch(search)}
    />
  );
};

export default Search;
