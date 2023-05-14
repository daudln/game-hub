import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
  Heading,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';

interface Props {
  selectedGenre: Genre | null;
  onSelect: (genre: Genre) => void;
}

const GenresList = ({ selectedGenre, onSelect }: Props) => {
  const { isLoading, error, data } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  if (error) return null;
  return (
    <>
      <Heading mb={3}>Genres</Heading>
      {isLoading &&
        skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                variant={'link'}
                fontSize={18}
                whiteSpace="normal"
                textAlign={'left'}
                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
                onClick={() => {
                  onSelect(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
