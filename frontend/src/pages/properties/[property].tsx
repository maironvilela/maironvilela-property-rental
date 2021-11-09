import { Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Header } from '../../components/Header';
import api from '../../services/api';

export default function Property() {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Carregando</h1>;
  }
  return (
    <Flex flexDirection="column">
      <Header />
    </Flex>
  );
}

// Necessário para paginas staticas dinamicas
export const getStaticPaths: GetStaticPaths = async () => {
  /**
  const { data } = await api.get('properties', {
    params: {
      page: 1,
      size: 50
    }
  });
  const paths = data.map(property => {
    return {
      params: {
        property: property._id
      }
    };
  }); */

  return {
    paths: [],
    fallback: 'blocking'
  };
};
export const getStaticProps: GetStaticProps = async ctx => {
  const { property: _id } = ctx.params;
  const { data: property } = await api.get(`/products/${_id}`);

  return {
    props: {
      property
    },
    revalidate: 60 * 60 * 24 // 24 horas
  };
};
