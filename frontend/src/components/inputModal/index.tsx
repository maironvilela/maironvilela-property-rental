import { Flex, Input, Text } from '@chakra-ui/react';

interface InputModelProps {
  label: string;
  placeholder: string;
  width?: number;
}

export const InputModal = ({
  placeholder,
  label,
  width = 100
}: InputModelProps) => {
  return (
    <Flex flexDir="column" ml={10}>
      <Text mb="8px" fontWeight="bold">
        {label}
      </Text>
      <Input
        w={width}
        pl={5}
        border="1px"
        borderColor="#A8A8B3"
        placeholder={placeholder}
        size="xl"
        fontSize="1.6rem"
        bg="#FFF"
        _focus={{ color: '#000', borderColor: 'blue.800', border: '2px' }}
        _placeholder={{ color: 'gray.200' }}
      />
    </Flex>
  );
};
