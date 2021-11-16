import {
  Flex,
  Button,
  InputLeftAddon,
  InputGroup,
  Text,
  Box
} from '@chakra-ui/react';

interface IncrementDecrementButtonsProps {
  label: string;
  value: number;
  setValue(value: number): void;
}

export const IncrementDecrementButtons = ({
  value,
  setValue,
  label
}: IncrementDecrementButtonsProps) => (
  <Box w="200px">
    <Text fontWeight="medium">{label}</Text>

    <Flex align="center" w="3rem">
      <Button
        bg={value === 0 ? 'cyan.100' : 'cyan.500'}
        mt="1rem"
        w="1rem"
        disabled={value === 1}
        onClick={() => setValue(value - 1)}
      >
        <Text> - </Text>
      </Button>
      <InputGroup>
        <InputLeftAddon
          children={value}
          mt={3}
          fontSize="1rem"
          fontWeight="bold"
        />
      </InputGroup>

      <Button
        bg="cyan.500"
        mt="1rem"
        w="1rem"
        onClick={() => setValue(value + 1)}
      >
        <Text> + </Text>
      </Button>
    </Flex>
  </Box>
);
