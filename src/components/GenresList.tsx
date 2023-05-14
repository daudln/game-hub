import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';

interface Props {
  selectedGenreId?: number;
  onSelect: (genre: Genre) => void;
}

const GenresList = ({ selectedGenreId, onSelect }: Props) => {
  const { isLoading, error, data } = useGenres();
  const selectedGenre = data?.results.find(
    (genre) => genre.id === selectedGenreId
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  if (error) return null;
  return (
    <Box overflow="scroll" maxH={'100vh'}>
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
                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
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
    </Box>
  );
};

export default GenresList;
