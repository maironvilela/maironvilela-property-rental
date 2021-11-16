import { Flex, Image, Text } from '@chakra-ui/react';

interface IconProps {
  imageUrl: string;
  label: string;
}

export const Icon = ({ imageUrl, label }: IconProps) => {
  return (
    <Flex mt="1rem" direction="column" align="center" w="8rem">
      <Image src={imageUrl} boxSize="3rem" />
      <Text>{label}</Text>
    </Flex>
  );
};
