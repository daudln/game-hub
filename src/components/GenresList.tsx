import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';

const GenresList = () => {
  const { data: genres, isLoading } = useGenres();
  return (
    <>
      {isLoading && <Spinner />}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack
              _hover={{ textDecoration: 'underline' }}
              style={{ cursor: 'pointer', overflowY: 'scroll' }}
            >
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
              />
              <Text fontSize={18}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
