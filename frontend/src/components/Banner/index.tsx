import { Flex, Image, Box, Text } from '@chakra-ui/react';
import faker from 'faker';

import styles from './banner.module.scss';

export const Banner = () => (
  <Flex className={styles.banner} align="center" position="relative">
    <Image
      src="https://images.unsplash.com/photo-1616242780739-156805e671b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
      alt="banner"
    />

    <Box position="absolute" ml="8rem" mt="10rem">
      <Text color="white" fontSize="4rem" fontWeight="bold" w="70rem">
        {faker.lorem.words(6)}
      </Text>

      <Text color="white" w="50rem" mt="2rem">
        {faker.lorem.words(15)}
      </Text>
    </Box>
  </Flex>
);
