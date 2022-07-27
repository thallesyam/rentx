import styled from 'styled-components'

export const Container = styled.aside`
  width: 100%;
  max-width: 25.438rem;
  height: 100vh;
  background-color: var(--gray-100);

  position: absolute;
  right: 0;
  top: 0;

  padding: 5.063rem 2.5rem;

  -webkit-box-shadow: -4px 4px 11px -4px #000000;
  box-shadow: -4px 4px 11px -4px #000000;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray-300);
    padding-bottom: 1rem;
    margin-bottom: 2rem;

    > h3 {
      font-family: 'Archivo';
      font-weight: 600;
      font-size: 1.563rem;
      text-align: center;
      color: var(--gray-900);

      margin-bottom: 0;
    }
  }
`

export const Form = styled.form`
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

  > section {
    > h3 {
      font-family: 'Archivo';
      font-weight: 600;
      font-size: 1.563rem;
      color: var(--gray-900);

      margin: 2rem 0 1.25rem;
    }

    .supply {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;
      flex-direction: column;
      background-color: var(--white-900);
      padding: 0.25rem;

      > button {
        width: 6.625rem;
        padding: 8px 0;
        background-color: var(--white-900);

        > svg {
          fill: var(--gray-700);
        }

        > p {
          font-weight: 500;
          font-size: 0.875rem;
          color: var(--gray-700);
        }
      }
      .supply_active {
        background-color: var(--gray-100);

        > svg {
          fill: var(--red-900);
        }

        > p {
          color: var(--gray-900);
        }
      }
    }

    .transmition {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      flex-direction: column;
      background-color: var(--white-900);
      padding: 0.25rem;
      margin-bottom: 2rem;

      > button {
        width: 100%;
        padding: 1.188rem 0;
        background-color: var(--white-900);

        > svg {
          fill: var(--gray-700);
        }

        > p {
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--gray-700);
        }
      }
      .transmition_active {
        background-color: var(--gray-100);

        > svg {
          fill: var(--red-900);
        }

        > p {
          color: var(--gray-900);
        }
      }
    }
  }
`
