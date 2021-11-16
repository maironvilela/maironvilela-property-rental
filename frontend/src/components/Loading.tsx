import { Spinner } from '@chakra-ui/spinner';

export const Loading = () => (
  <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="pink.200"
    color="blue.500"
    size="xl"
    ml="2"
    my="5rem"
  />
);
