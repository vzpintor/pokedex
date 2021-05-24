import React, { useState } from 'react';
import { isIOS } from 'react-native-elements/dist/helpers';
import { SearchBar } from 'react-native-elements';
import { ISearchProps } from '@components/Search/ISearchProps';

const Search = ({ customHandleSubmit = () => {} }: ISearchProps) => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit = () => {
    console.log('Buscando....', { search });
    customHandleSubmit();
  };

  const handleChange = (inputText: string) => {
    console.log({ inputText });
    setSearch(inputText);
  };

  return (
    <SearchBar
      platform={isIOS ? 'ios' : 'android'}
      placeholder="Type Here..."
      onChangeText={handleChange}
      value={search}
      returnKeyType={'search'}
      onSubmitEditing={handleSubmit}
    />
  );
};

export default Search;
