import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  box-shadow: 0 0 .3rem 0rem rgba(0,0,0,0.2);
  text-align: center;
  animation: showHeader 800ms;
  height: 2.9rem;

  > img {
    width: 5rem;
  }

  @keyframes showHeader {
    from {
      opacity: 0;
      transform: translateY(-2rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;