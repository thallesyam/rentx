import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 2.5rem auto 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--gray-300);

    @media (max-width: 768px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    > .from_to_container {
      display: grid;
      grid-template-columns: 1fr 48px;

      position: relative;

      svg {
        margin-left: 1rem;
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

    h1 {
      font-family: 'Archivo';
      font-weight: 600;
      font-size: 2.25rem;
      color: var(--gray-900);
    }

    p {
      font-size: 1rem;
      color: var(--gray-800);
    }
  }

  > section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 0 1rem;
    }

    > div {
      border: 1px solid var(--gray-200);
      background-color: var(--white-900);

      width: 100%;
      min-height: 293px;
      min-width: 360px;
      max-width: 360px;

      display: flex;
      justify-content: center;
      align-items: center;

      flex-direction: column;

      > img {
        padding: 2rem;
      }

      .car-cardinfo-container {
        border-top: 1px solid var(--gray-300);

        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 1.25rem 1.5rem;

        > div {
          span {
            font-size: 0.875rem;
            color: var(--gray-700);
            font-family: 'Archivo';
            font-weight: 500;
            margin-bottom: 0.5rem;
            display: block;
          }

          p {
            font-size: 1.25rem;
            font-family: 'Archivo';
            font-weight: 500;
          }

          .price {
            color: var(--red-900);
          }
        }
      }
    }
  }
`
