import React, {useMemo, useState} from 'react';
import {ActivityIndicator, Text, TextInput, View} from 'react-native';
import debounce from 'lodash.debounce';

import {photosApi} from '../../api/photos';
import {ImagesList} from '../../components';
import {styles} from './styles';

export const PhotosScreen = () => {
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const {data: photos, isFetching} = photosApi.useFetchQueryPhotosQuery(
    {
      per_page: 9,
      page: currentPage,
      query: debouncedSearchValue,
    },
    {skip: !debouncedSearchValue},
  );

  const fetchMorePhotos = async () => {
    if (isFetching || (photos && photos.total_pages <= currentPage)) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  const debouncedChangeHandler = useMemo(
    () =>
      debounce((searchValue: string) => {
        setCurrentPage(1);
        setDebouncedSearchValue(searchValue.trim());
      }, 500),
    [],
  );

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.textInput}
        onChangeText={debouncedChangeHandler}
      />
      {currentPage === 1 && isFetching ? (
        <ActivityIndicator size={'large'} style={styles.indicator} />
      ) : !debouncedSearchValue ? (
        <Text style={styles.title}>Please, type something</Text>
      ) : !photos?.results.length ? (
        <Text style={styles.title}>No results</Text>
      ) : (
        <ImagesList
          photos={photos?.results || []}
          onEndReached={fetchMorePhotos}
          isLoading={isFetching}
        />
      )}
    </View>
  );
};
