import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={'10px'} bgColor="red.600" borderRadius={5} m={'10px'}>
        <Heading as="h1">Ooops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This page does not exist'
            : 'An unexpected error has occurred'}
        </Text>
      </Box>
    </>
  );
};

export default Error;
