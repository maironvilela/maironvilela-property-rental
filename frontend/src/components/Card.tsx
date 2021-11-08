import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react"
import Link from 'next/link'

import { Modal } from './Modal';



type product = {
  _id: string;
  product_name: string
  quantity: string
  barcode: string;
  brands: string;
  categories: string;
  code: string
  packaging: string
  image_url: string
  createdAt: string
  updatedAt: string
}

type CardProps = {
  product: product;
}

export const Card = ({ product }: CardProps) => {

  return (
    <Box bg="white" height={60} borderRadius="16">

      <Flex align="center" justify="center" flexDirection="column" p={4}>
        <Image src={product.image_url === "https://world.openfoodfacts.orgundefined"
          ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCW51HqCQOq88IvXYN0uLyZXgK-UzeyXG4Q&usqp=CAU'
          : product.image_url}
          alt={product.product_name}
          boxSize="100px" w={10}
        />

        <Box h={16}>
          <Text p={4} fontFamily="Poppins"
            fontSize="12"
            align="center"
          >{product.product_name.slice(0, 100)} </Text>
        </Box>

        <Modal product={product} />



        {/*

        <ButtonDetails product={product} />

        <Link href={`/products/${product._id}`}>
          <Button top="2" position="relative">Detalhes</Button>
        </Link>
      */}


      </Flex>


    </Box >

  )
}
