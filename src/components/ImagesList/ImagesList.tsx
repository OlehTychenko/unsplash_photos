import React, {memo} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

import {IPhoto} from '../../interfaces/photos';
import {styles} from './styles';

import {ImageCard} from '..';

interface ImageListProps {
  onEndReached: () => void;
  photos: IPhoto[];
  isLoading: boolean;
}

export const ImagesList: React.FC<ImageListProps> = memo(
  ({photos, onEndReached, isLoading}) => {
    return (
      <FlatList
        style={styles.container}
        data={photos}
        renderItem={photo => <ImageCard photoDetails={photo.item} />}
        onEndReached={onEndReached}
        keyExtractor={item => item.id}
        ListFooterComponent={
          isLoading ? (
            <ActivityIndicator size={'large'} style={styles.indicator} />
          ) : null
        }
      />
    );
  },
);
