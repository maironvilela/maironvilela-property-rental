import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon
} from '@chakra-ui/input';
import { Flex, Stack, Text, Box } from '@chakra-ui/layout';

interface InputSideBarProps {
  inputLeftAddon?: string;
  label: string;
  isRightAddon?: boolean;
}

export const InputSideBar = ({
  inputLeftAddon,
  label,
  isRightAddon
}: InputSideBarProps) => {
  return (
    <Flex flexDirection="column" align="flex-start" w="20rem">
      <Text fontWeight="medium">{label}</Text>
      <Flex
        align="center"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="full"
        w="15rem"
      >
        <Text pl="1rem" fontWeight="bold" display={isRightAddon && 'none'}>
          {inputLeftAddon}
        </Text>

        <Input
          size="lg"
          borderRadius="full"
          type="number"
          fontSize="1.6rem"
          border="none"
          _focus={{ borderColor: 'none' }}
        />

        <Text px="1rem" fontWeight="bold" display={!isRightAddon && 'none'}>
          {inputLeftAddon}
        </Text>
      </Flex>
      {/*
      <Stack spacing={4}>
        <Text fontWeight="medium">{label}</Text>

        <Flex align="center">
          <Text
            position="absolute"
            pl="1rem"
            fontWeight="bold"
            left={isRightAddon ? '15rem' : '0'}
          >
            {inputLeftAddon}
          </Text>

          <Input
            w="20rem"
            size="lg"
            variant="outline"
            borderRadius="full"
            borderColor="gray.300"
            type="number"
            pl={inputLeftAddon ? '4rem' : '1rem'}
            fontSize="1.6rem"
          />
        </Flex>
      </Stack>{' '}
      */}
    </Flex>
  );
};
