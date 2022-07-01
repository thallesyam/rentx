import styled from 'styled-components'

export const Container = styled.main`
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
  }
`
