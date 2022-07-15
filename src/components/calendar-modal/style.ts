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

    > form {
      width: 100%;
      max-width: 256px;
      margin: 0 auto;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .input_container {
        > div {
          display: flex;
          flex-direction: column;
          margin-bottom: 3.25rem;

          > label {
            font-family: Archivo;
            font-weight: 500;
            font-size: 0.875rem;
            color: var(--gray-700);
            text-transform: uppercase;
            margin-bottom: 0.5rem;
          }

          > input {
            outline: none;
            width: 100%;
            height: 30px;
            border: 1px solid var(--gray-700);

            font-size: 1.875rem;
            font-weight: 600;
            color: var(--gray-900);

            border-top-color: var(--white-900);
            border-left-color: var(--white-900);
            border-right-color: var(--white-900);
          }
        }
      }

      > button {
        width: 100%;
        height: 4rem;

        font-weight: 500;
        color: var(--white-900);
        font-size: 1.125rem;
        background-color: var(--red-900);
        transition: filter 0.2s ease-in-out;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`
