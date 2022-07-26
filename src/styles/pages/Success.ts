import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--black-800);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    position: absolute;
  }

  div {
    width: 100%;
    max-width: 375px;

    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    > svg {
      margin-bottom: 3.5rem;
    }

    > h1 {
      margin-bottom: 1.5rem;
      font-family: Archivo;
      color: var(--white-900);
      font-weight: 600;
      font-size: 3.375rem;
    }

    > p {
      margin-bottom: 3rem;
      color: var(--gray-700);
      font-size: 1.125rem;
    }

    > button {
      width: 100%;
      max-width: 125px;
      height: 4rem;

      font-weight: 500;
      color: var(--white-900);
      font-size: 1rem;
      background-color: var(--black-700);
      transition: filter 0.2s ease-in-out;
      cursor: pointer;
      z-index: 99;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`
