import Link from 'next/link'

import { Button } from "@chakra-ui/react"
import { usePage } from "../../hooks/page"

type PaginationItemProps = {
  disable?: boolean;
  page: string;
}

export const PaginationItem = ({ disable = false, page }: PaginationItemProps) => {

  const { setCurrentPage } = usePage();
  return (
    <Button
      onClick={() => setCurrentPage(Number(page))}
      disabled={disable}
      ml="auto"
      size="sm"
      background="green.700"
      _hover={{ bg: "blue.400" }}
      transition="0.8s"
      p={1}
      color="white">

      {page}
    </Button>

  )
}
