import { useMemo } from 'react';

import { Button, Flex, HStack } from '@chakra-ui/react';

import { ItemPagination } from './ItemPagination';

interface PaginationProps {
  totalRecords: number;
  recordsPerPage: number;
  currentPage: number;
  setCurrentPage(page: number): void;
}

export const Pagination = ({
  totalRecords,
  recordsPerPage,
  currentPage,
  setCurrentPage
}: PaginationProps) => {
  const totalPages = useMemo(() => {
    return Math.ceil(totalRecords / recordsPerPage);
  }, []);

  const pages = useMemo(() => {
    const pages = [];
    let firstPage = currentPage - 2;
    let lastPage = currentPage + 2;

    switch (currentPage) {
      case 1:
      case 2:
        firstPage = 1;
        lastPage = 5;
        break;

      case totalPages:
      case totalPages - 1:
      case totalPages - 2:
        firstPage = currentPage - 2;
        lastPage = totalPages;
        break;
    }

    for (let i = firstPage; i <= lastPage; i++) {
      pages.push(i);
    }

    return pages;
  }, [currentPage]);

  const showPreviousPages = useMemo(() => {
    return currentPage > 3;
  }, [currentPage]);

  const showNextPages = useMemo(() => {
    return currentPage < totalPages - 2;
  }, [currentPage]);

  return (
    <HStack spacing="4px" mt="3rem">
      {showPreviousPages && (
        <HStack spacing="4px">
          <ItemPagination label="1" setCurrentPage={setCurrentPage} />
          <ItemPagination label="..." />
        </HStack>
      )}

      {pages.map(p => (
        <ItemPagination
          label={String(p)}
          key={p}
          isCurrentPage={p === currentPage}
          setCurrentPage={setCurrentPage}
        />
      ))}

      {showNextPages && (
        <HStack spacing="4px">
          <ItemPagination label="..." />
          <ItemPagination
            label={String(totalPages)}
            setCurrentPage={setCurrentPage}
          />
        </HStack>
      )}
    </HStack>
  );
};
