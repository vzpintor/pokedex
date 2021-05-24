import React, { useState } from 'react';
import { isIOS } from 'react-native-elements/dist/helpers';
import { SearchBar } from 'react-native-elements';
import { ISearchProps } from '@components/Search/ISearchProps';
import { useTranslation } from 'react-i18next';
import { language } from '@environments/enviroment.language';

const Search = ({ onSearch }: ISearchProps) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>('');

  return (
    <SearchBar
      onCancel={() => onSearch(search)}
      platform={isIOS ? 'ios' : 'android'}
      placeholder={t(language.typeSearch)}
      onChangeText={setSearch}
      value={search}
      returnKeyType={'search'}
      onSubmitEditing={() => onSearch(search)}
    />
  );
};

export default Search;
