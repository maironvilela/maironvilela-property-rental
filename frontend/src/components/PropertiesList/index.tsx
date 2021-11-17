import { useBreakpointValue, SimpleGrid, Flex } from '@chakra-ui/react';

import { Property } from '../../types';
import { Card } from './Card';

interface PropertiesListProps {
  properties: Property[];
}

export const PropertiesList = ({ properties }: PropertiesListProps) => {
  const cols = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  return (
    <Flex mt="3rem">
      <SimpleGrid columns={cols} spacing={4} p={4} mt={2} borderRadius={12}>
        {properties.map(property => (
          <Card key={property.id} property={property} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
