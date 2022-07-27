import styled from 'styled-components'

export const Container = styled.section`
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--gray-100);

  > section {
    display: flex;
    align-items: center;
    gap: 8.5rem;

    @media (max-width: 768px) {
      gap: 0;
      flex-direction: column;
      padding: 1rem;
    }

    width: 100%;
    max-width: 1120px;
  }
`
export const FormLogin = styled.form`
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

  .login_button,
  .register_button {
    width: 100%;
    height: 4rem;
    margin-top: 1rem;

    font-weight: 500;
    color: var(--white-900);
    font-size: 1.125rem;
    background-color: var(--red-900);
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .register_button {
    background-color: transparent;
    border: 1px solid var(--gray-300);
    color: var(--gray-900);

    &:hover {
      border: 2px solid var(--red-900);
    }
  }
`
