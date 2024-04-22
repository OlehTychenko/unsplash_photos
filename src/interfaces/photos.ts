export interface IUrls {
  small: string;
}

export interface IPhoto {
  id: string;
  description: null | string;
  alt_description: null | string;
  urls: IUrls;
  likes: number;
}

export interface IPhotosResponse {
  results: IPhoto[];
  total_pages: number;
}
