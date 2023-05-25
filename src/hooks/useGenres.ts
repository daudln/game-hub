import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';

import Genre from '../entinties/Genre';
import APIClient from '../services/api-client';
import ms from '../util/ms';

const apiClient = new APIClient<Genre>('/games');

export default function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    initialData: genres,
    staleTime: ms('24h'),
  });
}

export function useSelectedGenre(genreId?: number) {
  const { data: genres } = useGenres();
  return genres?.results.find((genres) => genres.id === genreId);
}
