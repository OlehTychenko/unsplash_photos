import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, {memo} from 'react';
import {Image, Pressable, Text} from 'react-native';

import {IPhoto} from '../../interfaces/photos';
import {styles} from './styles';

type ImageCardProps = {
  photoDetails: IPhoto;
};

export const ImageCard = memo(({photoDetails}: ImageCardProps) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handlePress = () => {
    navigation.navigate('PhotoDetails', photoDetails);
  };

  return (
    <Pressable onPress={handlePress}>
      <Image
        source={{
          uri: photoDetails.urls.small,
          cache: 'force-cache',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{photoDetails.alt_description}</Text>
    </Pressable>
  );
});
