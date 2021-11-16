/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState } from 'react';
import { FiFilter, FiArrowUp } from 'react-icons/fi';

import { Flex, Button, Icon, Text, Link } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { Banner } from '../../components/Banner';
import { ErrorLoading } from '../../components/ErrorLoading';
import { Card } from '../../components/List/Card';
import { SideBar } from '../../components/List/Sidebar'
import { Loading } from '../../components/Loading';
import { Pagination } from '../../components/Pagination';
import { useProperties } from '../../hooks/useProperties';
import api from '../../services/api';


interface ListProps { }
export default function List({ }: ListProps) {

  const [toggleHidden, setToggleHidden] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)


  const { data, isLoading, error } = useProperties(currentPage, 6)

  console.log(data)

  return (
    <Flex align="center" direction="column" >
      <Banner />

      <Flex w="100vw" pr="3rem" mt="6rem" >

        <Button onClick={() => setToggleHidden(!toggleHidden)} hidden={!toggleHidden} mt="-5rem " mr="auto" >
          <Icon as={FiFilter} size="200px" boxSize="2rem" color="blue.500" _hover={{ color: "pink.300" }} />


        </Button>

        <Flex w="25rem" hidden={toggleHidden} position="relative" bg="#F0F2F5">
          <SideBar toggleHidden={toggleHidden} setToggleHidden={setToggleHidden} />
        </Flex>


        <Flex flex="1" flexDirection={toggleHidden ? "row" : "column"} flexWrap="wrap" bg="#F0F2F5" mx="1rem">

          {isLoading ? (
            <Loading />
          )
            : error ? (
              <ErrorLoading />
            ) : (
              <>
                {
                  data.map(property => (

                    <Card key={property.id}
                      id={property.id}
                      title={String(property.id)}
                      streetAddress={property.address.streetAddress}
                      number={property.address.number}
                      complement={property.address.complement}
                      district={property.address.district}
                      city={property.address.city}
                      state={property.address.state}
                    />

                  ))
                }
              </>

            )}



        </Flex>


      </Flex >

      <Pagination
        totalRecords={100}
        recordsPerPage={8}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />


    </Flex>
  );
}
