import { Box, Text, Select as SelectChakra } from '@chakra-ui/react';

type selectValues = {
  key: string;
  values: string;
};

interface SelectProps {
  label: string;
  placeholder: string;
  values: selectValues[];
}
export const Select = ({ label, placeholder, values }: SelectProps) => (
  <Box w="20rem">
    <Text fontWeight="medium">{label}</Text>
    <SelectChakra placeholder={placeholder} size="lg" w="17rem" />
  </Box>
);
