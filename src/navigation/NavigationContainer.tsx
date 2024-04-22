import React from 'react';
import {NavigationContainer as DefaultNavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PhotoDetailsScreen, PhotosScreen} from '../screens';
import {IPhoto} from '../interfaces/photos';

export type RootStackParamList = {
  Photos: undefined;
  PhotoDetails: IPhoto;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const NavigationContainer = () => (
  <DefaultNavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Photos" component={PhotosScreen} />
      <Stack.Screen name="PhotoDetails" component={PhotoDetailsScreen} />
    </Stack.Navigator>
  </DefaultNavigationContainer>
);
