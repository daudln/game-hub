import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchInput?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchInput: (searchInput: string) => void;
}

const store = persist(
  devtools<GameQueryStore>(
    (set) => ({
      gameQuery: {},
      setGenreId: (genreId) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
      setSortOrder: (sortOrder) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
      setPlatformId: (platformId) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
      setSearchInput: (searchInput) =>
        set(() => ({ gameQuery: { searchInput } })),
    }),
    { enabled: true }
  ),
  { name: 'user-query-options' }
);
const useGameQueryStore = create(store);

export default useGameQueryStore;
