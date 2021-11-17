import { Specification } from '../types';

export const getSpecification = (
  specifications: Specification[],
  value: string
) => {
  const specification = specifications.find(
    spec => spec.name.toLowerCase() === value
  );
  return specification ? specification.description : '-';
};
