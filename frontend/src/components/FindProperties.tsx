import { useDisclosure } from '@chakra-ui/hooks';
import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Select,
  Text
} from '@chakra-ui/react';

import { InputModal } from './inputModal';

export const FindProperties = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="section" w="100vw" align="center" justify="center">
      <Box
        as="button"
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
        onClick={onOpen}
        borderColor="#ccd0d5"
        color="#FFF"
        _hover={{
          filter: 'brightness(0.7)'
        }}
      >
        Encontre seu imóvel
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent bg="#F0F2F5" width="100%">
          <ModalHeader
            align="center"
            fontSize="1.8rem"
            px={10}
            color="gray.800"
          >
            Pesquisar Imóveis
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex wrap="wrap">
              <Flex
                w="100vw"
                align="center"
                justify="space-between"
                px="10rem"
                py="2rem"
              >
                <Box
                  as="button"
                  mt="2rem"
                  height="3.6rem"
                  borderRadius="9999px"
                  transition="0.2s"
                  border="1px"
                  px="8rem"
                  fontSize="14px"
                  fontWeight="  "
                  bg="blue.800"
                  borderColor="#ccd0d5"
                  color="#FFF"
                  _hover={{
                    filter: 'brightness(0.7)'
                  }}
                >
                  Locação
                </Box>

                <Box
                  as="button"
                  mt="2rem"
                  height="3.6rem"
                  borderRadius="9999px"
                  transition="0.2s"
                  border="1px"
                  px="8rem"
                  fontSize="14px"
                  fontWeight="  "
                  bg="blue.800"
                  borderColor="#ccd0d5"
                  color="#FFF"
                  _hover={{
                    filter: 'brightness(0.7)'
                  }}
                >
                  Venda
                </Box>
              </Flex>

              <Flex flexDirection="column">
                <Box display="flex">
                  <InputModal placeholder="MG" label={'UF:'} width={50} />
                  <InputModal
                    placeholder="Belo Horizonte"
                    label={'Cidade: '}
                    width={500}
                  />
                </Box>

                <Box mt={8}>
                  <InputModal
                    placeholder="Nossa Senhora da Graça"
                    label={'Bairro: '}
                    width={575}
                  />
                </Box>

                <Box mt={8} ml={10} display="flex" direction="row">
                  <Box>
                    <Text mb="8px" fontWeight="bold">
                      Tipo do Imóvel
                    </Text>
                    <Select
                      placeholder="Select option"
                      bg="white"
                      size="lg"
                      w={150}
                      ml={2}
                    >
                      <option value="option1">Casa</option>
                      <option value="option2">Apartamento</option>
                      <option value="option3">Cobertura</option>
                    </Select>
                  </Box>
                  <InputModal placeholder="4" label={'Quartos'} width={50} />
                  <InputModal placeholder="2" label={'Vagas'} width={50} />
                </Box>
              </Flex>

              <Flex mt="5rem" align="center" w="100vw" justify="center">
                <Box
                  as="button"
                  height="3.6rem"
                  borderRadius="9999px"
                  transition="0.2s"
                  border="1px"
                  px="8rem"
                  fontSize="1.6rem"
                  fontWeight="  "
                  bg="pink.500"
                  borderColor="#ccd0d5"
                  color="#FFF"
                  _hover={{
                    filter: 'brightness(0.7)'
                  }}
                >
                  PESQUISAR
                </Box>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
