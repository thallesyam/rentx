import styled from 'styled-components'

export const Container = styled.section`
  background-color: var(--white-900);
  height: 100%;

  > header {
    padding: 1.625rem 2rem 1.625rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--black-800);

    > p {
      color: var(--white-900);
      font-size: 1.125rem;
      margin: 0;
      font-family: Archivo;
      font-weight: 600;
    }

    > button {
      background-color: transparent;
      cursor: pointer;

      transition: filter 0.2s ease-in;

      &:hover {
        filter: opacity(0.9);
      }
    }
  }

  > section {
    padding: 3rem;
    height: calc(575px - 73px);

    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
