import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  HStack,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';

import { usePage } from '../../hooks/page';
import { PaginationItem } from './PaginationItem';

type PaginationProps = {
  totalPage: number;
};

export default function Pagination({ totalPage }: PaginationProps) {
  const isDisplayInformationPage = useBreakpointValue({
    base: true,
    sm: false
  });
  const alignPagination = useBreakpointValue({ base: 'center', sm: false });

  const { currentPage } = usePage();

  const [pages, setPages] = useState([]);

  useEffect(() => {
    let init = currentPage - 3;
    let finalPage = currentPage + 3;

    switch (currentPage) {
      case 1:
      case 2:
      case 3:
        init = 1;
        finalPage = totalPage > 7 ? 7 : totalPage;
        break;

      case totalPage - 1:
        init = totalPage - 6;
        finalPage = totalPage;
        break;
      case totalPage:
        init = totalPage - 6;
        finalPage = totalPage;
    }

    const pages: number[] = [];
    for (let i = init; i <= finalPage; i++) {
      pages.push(i);
    }
    setPages(pages);
  }, [currentPage]);

  return (
    <Box
      mt="5"
      display="flex"
      align="center"
      justify="space-between"
      pl={4}
      pr={4}
      pb={10}
    >
      {isDisplayInformationPage || (
        <Box>
          <Text>
            Pagina {currentPage} de {totalPage}{' '}
          </Text>
        </Box>
      )}

      <HStack spacing="1" ml="auto">
        {pages.map(page => (
          <PaginationItem
            disable={currentPage == page}
            page={page}
            key={page}
          />
        ))}
      </HStack>
    </Box>
  );
}
