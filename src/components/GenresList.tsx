import {
  HStack,
  Image,
  List,
  ListItem,
  Text,
  textDecoration,
} from '@chakra-ui/react';
import useData from '../hooks/useData';
import { Genre } from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';

const GenresList = () => {
  const { data, isLoading } = useData<Genre>('/genres');
  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <List>
        {data.map((genre) => (
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
