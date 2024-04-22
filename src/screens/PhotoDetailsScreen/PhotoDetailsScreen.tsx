import React from 'react';
import {ImageBackground} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {RootStackParamList} from '../../navigation/NavigationContainer';
import {styles} from './styles';

export const PhotoDetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'PhotoDetails'>>();

  return (
    <ImageBackground
      source={{uri: route.params.urls.small}}
      style={styles.container}
      resizeMode="contain"
    />
  );
};
