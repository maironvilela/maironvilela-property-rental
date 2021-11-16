import { Flex, Box, Link } from '@chakra-ui/react';

export const FindProperties = () => {
  return (
    <Flex as="section" w="100vw" align="center" justify="center">
      <Link href="/properties/list">
        <Box
          mt="2rem"
          lineHeight="2"
          px="10rem"
          py="2rem"
          borderRadius="9999px"
          transition="0.2s"
          border="1px"
          fontSize="2.4rem"
          fontWeight="  "
          bg="pink.500"
          borderColor="#ccd0d5"
          color="#FFF"
          _hover={{
            filter: 'brightness(0.7)'
          }}
        >
          Encontre seu imóvel
        </Box>
      </Link>
    </Flex>
  );
};
