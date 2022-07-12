import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--black-800);

  > section {
    display: flex;
    align-items: center;
    gap: 5.375rem;

    width: 100%;
    max-width: 1120px;
  }
`
export const TextContainer = styled.section`
  width: 100%;

  > h1 {
    font-family: 'Archivo';
    font-size: 3.375rem;
    font-weight: 600;
    color: var(--white-900);

    margin-top: 7.5rem;
    margin-bottom: 2rem;
  }

  > p {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--white-900);

    max-width: 331px;
    margin-bottom: 4rem;
  }

  button {
    width: 100%;
    max-width: 292px;
    padding: 1.813rem;

    font-weight: 500;
    color: var(--white-900);
    font-size: 1.125rem;
    background-color: var(--red-900);
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
