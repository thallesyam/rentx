import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  padding: 2.5rem 0 0 4.5rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0;
    margin: 2rem auto 0;
  }

  > h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    font-family: 'Archivo';
    color: var(--gray-900);
  }

  > section {
    height: 82vh;

    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    &::-webkit-scrollbar-track {
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      display: none;
    }
  }
`
