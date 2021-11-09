import { Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { Banner } from '../components/Banner';
import { FindProperties } from '../components/FindProperties';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PropertiesList } from '../components/PropertiesList';
import api from '../services/api';
import { Property } from '../types';

interface HomeProps {
  properties: Property[];
}

export default function Home({ properties }: HomeProps) {
  return (
    <Flex align="center" flexDirection="column" w="100vw">
      <Header />

      <Banner />

      <FindProperties />

      <PropertiesList properties={properties} />

      <Footer />
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

  console.log(JSON.stringify(data.properties, null, 2));

  return {
    props: {
      properties: data.properties
    },
    revalidate: 60 * 60 * 24 // 24horas
  };
};
