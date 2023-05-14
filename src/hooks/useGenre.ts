import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import apiClient from '../services/api-client';
import ms from '../util/ms';
import { APIResponse } from '../services/api-client';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient
        .get<APIResponse<Genre>>('/genres')
        .then((response) => response.data),
    initialData: genres,
    staleTime: ms('24h'),
  });
export default useGenres;
