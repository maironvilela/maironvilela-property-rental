import { useState, useCallback } from 'react';
import { FiX } from 'react-icons/fi';

import { Flex, Box, Input, Button, Icon, Text, VStack } from '@chakra-ui/react';

import { ChooseWithButtons } from '../../../formComponents/ChooseWithButtons';
import { IncrementDecrementButtons } from '../../../formComponents/IncrementDecrementButtons';
import { InputSideBar } from '../../../formComponents/InputSidebar';
import { Select } from '../../../formComponents/Select';

interface SideBarProps {
  setToggleHidden(toggle: boolean): void;
  toggleHidden: boolean;
}

export const SideBar = ({ setToggleHidden, toggleHidden }: SideBarProps) => {
  const [bedroomAmount, setBedroomAmount] = useState(1);
  const [bathroomsAmount, setBathroomsAmount] = useState(1);
  const [parkingSpacesAmount, setParkingSpacesAmount] = useState(1);

  const incDecBedroom = useCallback((value: number): void => {
    if (value === -1 && bedroomAmount === 0) {
      return;
    }

    if (value === 1 && bedroomAmount === 10) {
      return;
    }

    setBedroomAmount(bedroomAmount + value);
  }, []);

  return (
    <Flex flex="1" pl="1rem">
      <Box>
        <VStack spacing={10}>
          <Button
            onClick={() => setToggleHidden(!toggleHidden)}
            position="absolute"
            right="1rem"
          >
            <Icon
              as={FiX}
              size="200px"
              boxSize="2rem"
              color="blue.500"
              mt="2rem"
            />
          </Button>
          <ChooseWithButtons
            label="Finalidade"
            btn1Label="Aluguel"
            btn2Label="Venda"
            btn1IsSelected={true}
            btn2IsSelected={false}
          />
          <Select label="Cidade" placeholder="Informe a Cidade" values={[]} />
          <Select label="Bairro" placeholder="Informe o Bairro" values={[]} />
          <IncrementDecrementButtons
            value={bedroomAmount}
            setValue={setBedroomAmount}
            label="Quantidade de Quartos"
          />
          <IncrementDecrementButtons
            value={bathroomsAmount}
            setValue={setBathroomsAmount}
            label="Quantidade de Banheiros"
          />
          <IncrementDecrementButtons
            value={parkingSpacesAmount}
            setValue={setParkingSpacesAmount}
            label="Quantidade de Vagas"
          />
          <ChooseWithButtons
            label="Permite Pets"
            btn1Label="SIM"
            btn2Label="NÃO"
            btn1IsSelected={false}
            btn2IsSelected={true}
          />

          <InputSideBar
            inputLeftAddon="R$"
            label="Valor Mínimo"
            isRightAddon={false}
          />
          <InputSideBar
            inputLeftAddon="R$"
            label="Valor Máximo"
            isRightAddon={false}
          />
          <InputSideBar
            label="Área Mínima"
            inputLeftAddon="m2"
            isRightAddon={true}
          />

          <InputSideBar
            label="Área Maxima"
            inputLeftAddon="m2"
            isRightAddon={true}
          />
        </VStack>
      </Box>
    </Flex>
  );
};
