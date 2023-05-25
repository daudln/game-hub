import useGameTrailer from '../hooks/useTrailer';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useGameTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const first = trailers?.results[0];
  return first ? (
    <video controls poster={first.preview}>
      <source src={first.data[480]} type="video/mp4" />
    </video>
  ) : null;
};

export default GameTrailer;
