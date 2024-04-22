import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

import {IPhotosResponse} from '../interfaces/photos';

export const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({baseUrl: Config.API_URL}),
  endpoints: build => ({
    fetchQueryPhotos: build.query<
      IPhotosResponse,
      {per_page: number; page: number; query: string}
    >({
      query: ({per_page = 9, page = 1, query = ''}) => ({
        url: '/search/photos',
        params: {
          per_page,
          page,
          client_id: Config.ACCESS_KEY,
          query,
        },
      }),
      keepUnusedDataFor: 100,
      serializeQueryArgs: item => item.queryArgs.query,
      merge: (currentCache, newItems, {arg: {page}}) => {
        if (page === 1) {
          return newItems;
        }
        return {
          ...currentCache,
          results: [...currentCache.results, ...newItems.results],
        };
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg;
      },
    }),
  }),
});
