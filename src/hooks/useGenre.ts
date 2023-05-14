import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';

import ms from '../util/ms';
import APIClient from '../services/api-client';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>('/games');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    initialData: genres,
    staleTime: ms('24h'),
  });
export default useGenres;
