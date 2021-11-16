import { useQuery } from 'react-query';

import api from '../services/api';
import { Property } from '../types';

export const getProperties = async (
  page: number,
  size: number
): Promise<Property[]> => {
  const { data, headers } = await api.get('/properties', {
    params: {
      page,
      size
    }
  });

  return data.properties;
};

export const useProperties = (page: number, size: number) => {
  return useQuery(['properties', page], () => getProperties(page, size), {
    staleTime: 1000 * 5 // 5 segundos
  });
};
