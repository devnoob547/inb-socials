import React from 'react';

import { Flex } from './style';
import Header from '../Header'
import Main from '../Main'

function Layout() {
  return (
    <Flex>
      <Header />

      <Main />
    </Flex>
  );
}

export default Layout;