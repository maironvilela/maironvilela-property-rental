import { Flex } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex flexDir="row" as="header" align="center" justify="center" w="40">
      <img
        src="https://media.istockphoto.com/vectors/family-home-vector-id1226844987?k=20&m=1226844987&s=612x612&w=0&h=pNaM1Tn6xL2jX4VqQdnh0d0qTSDdIeCK2B_Tms5Qg9U="
        width={100}
      />
    </Flex>
  );
};
