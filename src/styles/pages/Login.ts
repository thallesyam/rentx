import styled from 'styled-components'

export const Container = styled.main`
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--gray-100);

  > section {
    display: flex;
    align-items: center;
    gap: 8.5rem;

    width: 100%;
    max-width: 1120px;
  }
`
export const FormLogin = styled.section`
  width: 100%;

  > section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  > h1 {
    color: var(--gray-600);
    font-size: 2.25rem;
    font-weight: 600;
    font-family: 'Archivo';
    margin-bottom: 1.5rem;
  }

  > p {
    max-width: 254px;
    margin-bottom: 2.5rem;

    font-size: 1rem;
    font-weight: 300;
    color: var(--gray-800);
  }
`
