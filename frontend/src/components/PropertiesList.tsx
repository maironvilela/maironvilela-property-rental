import { useBreakpointValue, SimpleGrid, Flex } from '@chakra-ui/react';

import { Card } from './Card';

export const PropertiesList = () => {
  const cols = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  return (
    <Flex>
      <SimpleGrid columns={cols} spacing={2} p={4} mt={2} borderRadius={12}>
        <Card />
        <Card />

        <Card />

        <Card />
      </SimpleGrid>
    </Flex>
  );
};
