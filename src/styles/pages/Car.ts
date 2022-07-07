import styled from 'styled-components'

export const Container = styled.main`
  > header {
    display: flex;
    align-items: center;
    gap: 3.688rem;

    border-bottom: 1px solid var(--gray-300);
    padding-bottom: 1.5rem;

    width: 100%;
    max-width: 1128px;
    margin: 2.5rem auto;

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
        }

        > p {
          color: var(--red-900);
        }
      }
    }
  }
`
