import styled from 'styled-components'

export const Container = styled.form`
  > .from_to_container {
    display: grid;
    grid-template-columns: 1fr 48px;

    margin-top: 1.75rem;

    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      background-color: var(--gray-200);
      bottom: -1rem;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      > div {
        display: flex;
        flex-direction: column;

        > p {
          font-family: Archivo;
          font-weight: 500;
          font-size: 0.75rem;
          color: var(--gray-700);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        > span {
          font-size: 1.125rem;
          font-weight: 500;
          color: var(--gray-900);
        }
      }
    }
  }

  > .price_container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 2rem;

    > div {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      > div {
        display: flex;
        flex-direction: column;

        > p {
          font-family: Archivo;
          font-weight: 500;
          font-size: 0.75rem;
          color: var(--gray-700);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        > span {
          font-size: 1.125rem;
          font-weight: 500;
          color: var(--gray-900);
        }
      }
    }

    > h3 {
      font-size: 2rem;
      font-weight: 500;
      color: var(--green-900);
    }
  }

  > button {
    width: 100%;
    height: 5rem;

    margin-top: 6rem;

    font-weight: 500;
    color: var(--white-900);
    font-size: 1.125rem;
    background-color: var(--green-900);
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }

    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }
`
