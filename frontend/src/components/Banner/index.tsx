import { Flex, Image, Box, Text, Button } from '@chakra-ui/react';
import faker from 'faker';

import styles from './banner.module.scss';

export const Banner = () => {
  const banner =
    'https://images.unsplash.com/photo-1616242780739-156805e671b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80';

  return (
    <Flex
      className={styles.banner}
      align="center"
      position="relative"
      as="section"
    >
      <Image src={banner} alt="banner" />

      <Box position="absolute" ml="8rem" mt="10rem">
        <Text w="60rem" mt="2rem" isTruncated>
          Destaques...
        </Text>

        <Text fontSize="4rem" fontWeight="bold" w="70rem">
          {faker.lorem.words(6)}
        </Text>

        <Text w="60rem" mt="2rem" isTruncated>
          {faker.lorem.words(15)}
        </Text>

        <Button
          borderRadius="9999px"
          color="white"
          fontWeight="normal"
          bg={'blue.700'}
          variant="solid"
          mt="2rem"
          fontSize="1.8rem"
          p="2rem"
        >
          Conferir
        </Button>
      </Box>
    </Flex>
  );
};
