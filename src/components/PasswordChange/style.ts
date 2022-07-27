import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;

  padding: 1.5rem 0 0;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > input {
    color: var(--gray-900);
  }

  .change_password_button {
    width: 100%;
    height: 4rem;

    font-weight: 500;
    color: var(--white-900);
    font-size: 1.125rem;
    background-color: var(--red-900);
    transition: filter 0.2s ease-in-out;
    margin-top: 1rem;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
