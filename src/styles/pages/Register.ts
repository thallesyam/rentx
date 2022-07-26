import styled from 'styled-components'

export const Container = styled.section`
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--gray-100);

  > section {
    display: grid;
    grid-template-columns: 384px 1fr;
    align-items: center;
    gap: 8.5rem;

    @media (max-width: 768px) {
      gap: 0;
      grid-template-columns: 1fr;
      padding: 1rem;
    }

    width: 100%;
    max-width: 1120px;
  }
`
export const FormRegister = styled.form`
  width: 100%;

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

  .register_button {
    width: 100%;
    height: 4rem;

    font-weight: 500;
    color: var(--white-900);
    font-size: 1.125rem;
    background-color: var(--red-900);
    transition: filter 0.2s ease-in-out;
    margin-top: 2.813rem;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
