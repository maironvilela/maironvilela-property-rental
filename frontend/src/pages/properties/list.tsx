/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, useCallback } from 'react';
import { FiFilter, } from 'react-icons/fi';

import { Flex, Button, Icon, VStack } from '@chakra-ui/react';

import { Banner } from '../../components/Banner';
import { ErrorLoading } from '../../components/ErrorLoading';
import { Card } from '../../components/List/Card';
import { SideBar } from '../../components/List/Sidebar'
import { Loading } from '../../components/Loading';
import { Pagination } from '../../components/Pagination';
import { useProperties } from '../../hooks/useProperties';
import { PropertyImages, Specification } from '../../types';

interface ListProps { }
export default function List({ }: ListProps) {



  const getMainImage = useCallback((images: PropertyImages[]) => {
    const image = images.find(img => img.isMainImage)
    return image.imageUrl;
  }, [])


  const getSpecification = useCallback((specifications: Specification[], value: string) => {
    const specification = specifications.find(spec => spec.name.toLowerCase() === value)
    return specification ? specification.description : '-';
  }, [])

  const [toggleHidden, setToggleHidden] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, error } = useProperties(currentPage, 6)


  return (
    <Flex align="center" direction="column" >
      <Banner />

      <Flex w="100vw" pr="3rem" mt="6rem" >

        <Button onClick={() => setToggleHidden(!toggleHidden)} hidden={!toggleHidden} mt="-5rem " mr="auto" >
          <Icon as={FiFilter} size="200px" boxSize="2rem" color="blue.500" _hover={{ color: "pink.300" }} />


        </Button>

        <Flex w="25rem" hidden={toggleHidden} position="relative" bg="#F0F2F5" ml="2rem">
          <SideBar toggleHidden={toggleHidden} setToggleHidden={setToggleHidden} />
        </Flex>


        <Flex flex="1" flexWrap="wrap" bg="#F0F2F5" mx="1rem">

          {isLoading ? (
            <Loading />
          )
            : error ? (
              <ErrorLoading />
            ) : (
              < >

                {
                  data.map(property => (

                    <Card key={property.id}
                      id={property.id}
                      description={property.description}
                      streetAddress={property.address.streetAddress}
                      number={property.address.number}
                      complement={property.address.complement}
                      district={property.address.district}
                      city={property.address.city}
                      state={property.address.state}
                      mainImage={getMainImage(property.propertyImages)}
                      allowPets={getSpecification(property.specifications, 'allows pets')}
                      sizeArea={getSpecification(property.specifications, 'area')}
                      numberOfBathrooms={getSpecification(
                        property.specifications,
                        'number of bathrooms')}
                      numberOfRooms={getSpecification(property.specifications, 'number of rooms')}
                      numberOfParkingSpaces={getSpecification(property.specifications, 'number of parkingspaces')}
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
