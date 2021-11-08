import { useMemo } from 'react';

import {
  useBreakpointValue,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  SimpleGrid,
  Box,
  Text,
  Tag,
  Image
} from '@chakra-ui/react';
import { parseISO } from 'date-fns';
import format from 'date-fns/format';
import { ptBR } from 'date-fns/locale';

import { DetailsProduct } from './DetailsProduct';

type Product = {
  _id: string;
  product_name: string;
  quantity: string;
  barcode: string;
  brands: string;
  categories: string;
  code: string;
  packaging: string;
  image_url: string;
  createdAt: string;
  updatedAt: string;
};

type ModalProps = {
  product: Product;
};

export const Modal = ({ product }: ModalProps) => {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const createdAtFormatted = useMemo(() => {
    return format(parseISO(product.createdAt), "dd/MM/yyyy 'as' HH:mm", {
      locale: ptBR
    });
  }, []);

  const updatedAtFormatted = useMemo(() => {
    return format(parseISO(product.updatedAt), "dd/MM/yyyy 'as' HH:mm", {
      locale: ptBR
    });
  }, []);

  return (
    <>
      <Button onClick={onOpen}>Detalhes</Button>

      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth={isMobile ? 100 : 600}>
          <ModalHeader w="95%">{product?.product_name}</ModalHeader>
          <ModalCloseButton />

          <ModalBody
            display="flex"
            align={isMobile ? 'center' : 'flex-start'}
            bg="white"
            mt={2}
            flexDirection={isMobile ? 'column' : 'row'}
          >
            <Box>
              <Image display="inline-block" src={product.image_url} />
            </Box>

            <SimpleGrid columns={1} spacing={2} p={4} mt={2} borderRadius={12}>
              <DetailsProduct
                label={'Code: '}
                value={product.code}
              ></DetailsProduct>
              <DetailsProduct
                label={'Quantidade: '}
                value={product.quantity}
              ></DetailsProduct>
              <DetailsProduct
                label={'Pacote: '}
                value={product.packaging}
              ></DetailsProduct>
              <DetailsProduct
                label={'Categorias: '}
                value={product.categories}
              ></DetailsProduct>
              <DetailsProduct
                label={'Marcas: '}
                value={product.brands}
              ></DetailsProduct>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <DetailsProduct
              label={'Criação: '}
              value={createdAtFormatted}
            ></DetailsProduct>

            {createdAtFormatted === updatedAtFormatted || (
              <DetailsProduct
                label={'Atualização: '}
                value={updatedAtFormatted}
              ></DetailsProduct>
            )}
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};
