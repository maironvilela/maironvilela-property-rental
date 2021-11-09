import { Box, Tag, Text } from '@chakra-ui/react';

type DetailsPropertiesProps = {
  label: string;
  value: string;
};

export const DetailsProperty = ({ label, value }: DetailsPropertiesProps) => (
  <Box display="flex" align="center" justify="center" mt={1}>
    <Text fontWeight="bold" display="inline" ml={10}>
      {label}
    </Text>
    <Tag size="xl" ml={2} color="#736F6F">
      {value}
    </Tag>
  </Box>
);
