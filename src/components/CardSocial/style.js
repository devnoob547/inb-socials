import styled from 'styled-components';

export const Container = styled.div`
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E5E5E5;
  padding: .4rem 8rem;
  border-radius: .1rem;
  margin: .4rem .6rem;
  transition: 500ms;

  &:hover {
    background-color: #F4F4F4;
  }

  > img {
    width: 1.5rem;
    margin-right: .8rem;
  }
`;

export const Title = styled.h2`
  font-size: .7rem;
`;
