import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import APIClient from '../services/api-client';
import ms from '../util/ms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/parent_platforms/lists/platforms');
export default function usePlatforms() {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    initialData: platforms,
    staleTime: ms('24h'),
  });
}

export function useSelectedPlatform(platformId?: number) {
  const { data: platform } = usePlatforms();
  return platform?.results.find((platform) => platform.id === platformId);
}
