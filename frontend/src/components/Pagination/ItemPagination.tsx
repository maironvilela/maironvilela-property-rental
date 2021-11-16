import { Flex } from '@chakra-ui/react';

interface ItemPaginationProps {
  label: string;
  isCurrentPage?: boolean;
  setCurrentPage?(page: number): void;
}

export const ItemPagination = ({
  label,
  isCurrentPage = false,
  setCurrentPage
}: ItemPaginationProps) => {
  return (
    <Flex
      as="button"
      onClick={() => setCurrentPage(Number(label))}
      disabled={isCurrentPage}
      _disabled={{ color: '#000', bg: '#FFF' }}
      align="center"
      height="24px"
      transition="all 0.2s"
      border="1px"
      p="20px"
      borderRadius="50%"
      fontSize="14px"
      bg="blue.600"
      borderColor="cyan.300"
      color="#FFF"
      _hover={{ filter: isCurrentPage ? 'brightness(1)' : 'brightness(0.8)' }}
      _focus={{
        boxShadow:
          '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
      }}
    >
      {label}
    </Flex>
  );
};
