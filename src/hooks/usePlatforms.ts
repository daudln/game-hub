import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import apiClient from '../services/api-client';
import ms from '../util/ms';
import { APIResponse } from '../services/api-client';

interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<APIResponse<Platform>>('/platforms/lists/parents')
        .then((response) => response.data),
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
