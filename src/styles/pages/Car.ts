import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1128px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  > header {
    display: flex;
    align-items: center;
    gap: 3.688rem;

    border-bottom: 1px solid var(--gray-300);
    padding-bottom: 1.5rem;
    margin-top: 2.5rem;

    > section {
      display: flex;
      gap: 3rem;

      > div {
        > span {
          color: var(--gray-700);
          font-size: 0.875rem;
          font-weight: 500;
          font-family: Archivo;
        }

        > h1,
        p {
          color: var(--gray-900);
          font-size: 2.25rem;
          font-weight: 600;
          font-family: Archivo;

          @media (max-width: 768px) {
            font-size: 1.5rem;
          }
        }

        > p {
          color: var(--red-900);
        }
      }
    }
  }

  > section {
    display: grid;
    grid-template-columns: 1fr 384px;
    height: calc(100vh - 8rem);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    > div {
      height: 100%;
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
        padding: 0 1rem;

        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`
