import { Box, Text, Button } from '@chakra-ui/react';

interface ChooseWithButtonsProps {
  label: string;
  btn1Label: string;
  btn2Label: string;
  btn1IsSelected: boolean;
  btn2IsSelected: boolean;
}

export const ChooseWithButtons = ({
  label,
  btn1Label,
  btn2Label,
  btn1IsSelected,
  btn2IsSelected
}: ChooseWithButtonsProps) => (
  <Box w="20rem">
    <Text fontWeight="medium">{label}</Text>
    <Button bg={btn1IsSelected ? 'cyan.500' : 'cyan.100'} mt="1rem" w="5rem">
      {btn1Label}
    </Button>
    <Button
      bg={btn2IsSelected ? 'cyan.500' : 'cyan.100'}
      mt="1rem"
      w="5rem"
      ml="1rem"
    >
      {btn2Label}
    </Button>
  </Box>
);
