import { Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { usePage } from '../hooks/page';
import api from '../services/api';

type Property = {
  id: number;
};

interface HomeProps {
  properties: Property[];
}

export default function Home({ properties }: HomeProps) {
  return (
    <Flex align="center" flexDirection="column" w="100vw">
      <Header />

      <section>
        <Banner />
      </section>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const page = 1;
  const size = 6;

  const { data } = await api.get(`properties`, {
    params: {
      size,
      page
    }
  });

  const { properties } = data;

  console.log(properties);

  return {
    props: {
      properties: properties
    },
    revalidate: 60 * 60 * 24 // 24horas
  };
};
