import { useState, useEffect } from 'react';

import { Flex, Spinner, Text, Images } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { Banner } from '../components/Banner';
import { FindProperties } from '../components/FindProperties';
import { Pagination } from '../components/Pagination';
import { PropertiesList } from '../components/PropertiesList';
import { getProperties } from '../hooks/useProperties';
import api from '../services/api';
import { Property } from '../types';

interface HomeProps {
  properties: Property[];
}

export default function Home({ properties: initialProperties }: HomeProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [properties, setProperties] = useState(initialProperties);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // const { data: properties, isLoading, error } = useProperties(currentPage, 6);

  useEffect(() => {
    const getPropertiesList = async () => {
      try {
        setIsLoading(true);

        const properties = await getProperties(currentPage, 6);
        setProperties(properties);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPropertiesList();
  }, [currentPage]);

  return (
    <Flex align="center" flexDirection="column" w="100vw">
      <Banner />
      <FindProperties />

      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="pink.200"
          color="blue.500"
          size="xl"
          ml="2"
          my="5rem"
        />
      ) : isError ? (
        <Text>Fala Ao carregar informações</Text>
      ) : (
        <PropertiesList properties={properties} />
      )}

      <Pagination
        totalRecords={100}
        recordsPerPage={6}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const page = 1;
  const size = 6;

  const { data } = await api.get('/properties', {
    params: {
      page,
      size
    }
  });

  return {
    props: {
      properties: data.properties
    },
    revalidate: 60 * 60 * 24 // 24horas
  };
};
