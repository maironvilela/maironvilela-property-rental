/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, useCallback } from 'react';
import { FiFilter, FiArrowUp } from 'react-icons/fi';

import { Flex, Button, Icon, Text, Link } from '@chakra-ui/react';

import { Banner } from '../../components/Banner';
import { Card } from '../../components/List/Card';
import { SideBar } from '../../components/List/Sidebar'


interface ListProps { }
export default function List({ }: ListProps) {

  const [toggleHidden, setToggleHidden] = useState(true)

  const goPageTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <>

      <Banner />


      <Flex w="100vw" pr="3rem" mt="6rem" >

        <Button onClick={() => setToggleHidden(!toggleHidden)} hidden={!toggleHidden} mt="-5rem " mr="auto" >
          <Icon as={FiFilter} size="200px" boxSize="2rem" color="blue.500" _hover={{ color: "pink.300" }} />


        </Button>

        <Flex w="25rem" hidden={toggleHidden} position="relative" bg="#F0F2F5">
          <SideBar toggleHidden={toggleHidden} setToggleHidden={setToggleHidden} />
        </Flex>


        <Flex flex="1" flexDirection={toggleHidden ? "row" : "column"} flexWrap="wrap" bg="#F0F2F5" mx="1rem">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>


      </Flex >


    </>
  );
}
