import { useQuery } from '@tanstack/react-query';
import GameScreenshoots from '../entinties/GameScreenshoots';
import APIClient from '../services/api-client';
const useGameScreenshoots = (gameId: number) => {
  const apiClient = new APIClient<GameScreenshoots>(
    `/games/${gameId}/screenshots`
  );
  return useQuery({
    queryKey: ['screenshoots', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameScreenshoots;
