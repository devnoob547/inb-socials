import React from 'react';

import { Container } from './style';
import CardSocial from '../CardSocial';

function Main() {
  return (
    <Container>
      <CardSocial 
        icon="https://image.flaticon.com/icons/png/512/1384/1384060.png"
        title="Youtube"
        link="https://www.youtube.com/channel/UC-g4CDDoaTmit1bWpLclvcw"
      />
      <CardSocial 
        icon="https://image.flaticon.com/icons/png/512/2111/2111463.png"
        title="Instagram"
        link="https://www.instagram.com/nazarenomangabeira/"
      />
      <CardSocial 
        icon="https://image.flaticon.com/icons/png/512/733/733547.png"
        title="Facebook"
        link="https://pt-br.facebook.com/nazarenomangabeira/"
      />
      <CardSocial 
        icon="https://image.flaticon.com/icons/png/512/2111/2111370.png"
        title="Discord"
        link="https://discord.com/invite/5RWWSTwKaf"
      />
    </Container>
  );
}

export default Main;