import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { APIResponse } from '../services/api-client';
import useGameQueryStore from '../store/gameQuery';
import ms from '../util/ms';
import { Game } from '../entinties/Game';

const apiClient = new APIClient<Game>('/games');
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<APIResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchInput,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
};
export default useGames;
