import React from 'react';

import { Container, Title } from './style';

function CardSocial(props) {
  return (
    <a href={props.link} target="__blank">
      <Container>
        <img src={props.icon} alt={`Ícone do ${props.title}`} />

        <Title>{props.title}</Title>
      </Container>
    </a>
  );
}

export default CardSocial;