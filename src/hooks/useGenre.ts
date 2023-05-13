import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
