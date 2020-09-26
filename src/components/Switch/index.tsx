import React from 'react';
import ReactSwitch, { ReactSwitchProps } from 'react-switch';

import { Container } from './styles';

const Switch: React.FC<ReactSwitchProps> = props => {
  return (
    <Container>
      <ReactSwitch
        uncheckedIcon={false}
        checkedIcon={false}
        height={28}
        handleDiameter={22}
        width={50}
        offColor="#630EAC"
        onColor="#630EAC"
        {...props}
      />
    </Container>
  );
};

export default Switch;
