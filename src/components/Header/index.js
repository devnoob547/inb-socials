import React from 'react';

import { Container } from './style';
import logo from '../../logo.jfif'

function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo igreja do nazareno" />
    </Container>
  );
}

export default Header;