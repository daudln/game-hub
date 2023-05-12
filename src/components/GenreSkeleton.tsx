import { Box, HStack, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const GenreSkeleton = () => {
  return (
    <Box boxShadow="lg" paddingY="5px">
      <HStack>
        <SkeletonCircle size="10" />
        <SkeletonText noOfLines={1} spacing="4" />
      </HStack>
    </Box>
  );
};

export default GenreSkeleton;
