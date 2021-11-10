import { Box, Flex, Text } from '@chakra-ui/layout';

import { DetailsProperty } from './DetailsProperty';

type KeyValue = {
  key: string;
  value: string;
};

interface SummaryProps {
  title: string;
  keyValue: KeyValue[];
  bg?: string;
  mt?: string;
  size: string;
}

export const Summary = ({
  title = 'Descição',
  keyValue,
  size,
  bg = 'white',
  mt = '2rem'
}: SummaryProps) => {
  return (
    <Flex flexDirection="column" bg={bg} mt={mt} w={size}>
      <Flex h="3rem" bg="blue.800" align="center">
        <Text p="1rem" color="white">
          {title}
        </Text>
      </Flex>

      <Flex flexDirection="column">
        {keyValue.map(k => (
          <DetailsProperty key={k.key} label={k.key} value={k.value} />
        ))}
      </Flex>
    </Flex>
  );
};
