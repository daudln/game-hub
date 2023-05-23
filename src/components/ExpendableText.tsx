import { useState } from 'react';

import { Button, Text } from '@chakra-ui/react';
interface Props {
  children: string;
}
const ExpendableText = ({ children }: Props) => {
  const [expanded, setExpendade] = useState(false);
  if (!children) return null;
  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expanded ? children : children.substring(0, limit) + '...';
  return (
    <Text>
      {summary}
      <Button
        size={'xs'}
        fontWeight="bold"
        colorScheme={'green'}
        ml="5px"
        onClick={() => setExpendade(!expanded)}
      >
        {expanded ? 'Less' : 'More'}
      </Button>
    </Text>
  );
};

export default ExpendableText;
