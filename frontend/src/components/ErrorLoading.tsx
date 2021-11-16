import { Text, Image } from '@chakra-ui/react';

export const ErrorLoading = () => (
  <>
    <Text>Falha ao carregar informações</Text>
    <Image
      src="https://thumbs.dreamstime.com/b/dados-quebrados-sem-pontos-pretos-128834707.jpg"
      alt="Falha ao carregar pagina"
    />
  </>
);
