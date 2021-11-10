import { Flex, Text, Box } from '@chakra-ui/layout';

interface FooterProps {
  mt?: string;
}

export const Footer = ({ mt = '5rem' }: FooterProps) => (
  <Flex direction="column" bg="blue.800" w="100vw" px={20} py={10} mt={mt}>
    <Text color="white" fontSize="3rem" fontWeight="bold">
      Imobiliária StayHome
    </Text>

    <Flex justify="space-between" mt="2rem">
      <Box>
        <Text color="white" fontSize="1.8rem" fontWeight="bold" mb={3}>
          Localização
        </Text>

        <Text color="white" fontSize="1.6rem">
          Rua Piedade do Norte, 233
        </Text>
        <Text color="white" fontSize="1.6rem">
          Centro - Belo Horizonte/MG
        </Text>
      </Box>

      <Box>
        <Text color="white" fontSize="1.8rem" fontWeight="bold" mb={3}>
          Whats App
        </Text>
        <Text color="white" fontSize="1.6rem">
          (31) 99965-6325
        </Text>
        <Text color="white" fontSize="1.6rem">
          (31) 3365-6525
        </Text>

        <Text color="white" fontSize="1.8rem" fontWeight="bold" mb={3} mt={10}>
          Email
        </Text>
        <Text color="white" fontSize="1.6rem">
          sh@stayhome.com.br
        </Text>
      </Box>

      <Box>
        <Text color="white" fontSize="1.8rem" fontWeight="bold" mb={3}>
          Fale Conosco
        </Text>
        <Text color="white" fontSize="1.6rem">
          (31) 3362-9698
        </Text>
        <Text color="white" fontSize="1.6rem">
          (31) 3695-5258
        </Text>
      </Box>
    </Flex>
  </Flex>
);
