import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const CarCard = styled.div`
  width: 100%;
  padding: 2rem;
  border: 1px solid var(--gray-200);
  background-color: var(--white-900);

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    > div {
      span {
        font-size: 0.875rem;
        color: var(--gray-700);
        font-family: 'Archivo';
        font-weight: 500;
      }

      p {
        font-size: 1.5rem;
        font-family: 'Archivo';
        font-weight: 500;
      }
    }

    div:nth-child(1) {
      display: flex;
      flex-direction: column;

      p {
        color: var(--gray-900);
      }
    }

    div:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      p {
        color: var(--red-900);
      }
    }
  }
`

export const RentPeriod = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  border: 1px solid var(--gray-200);
  background-color: var(--white-900);

  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    text-transform: uppercase;
    color: var(--gray-700);
    font-size: 0.75rem;
    font-weight: 500;
    font-family: 'Archivo';
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    > p {
      font-size: 1.125rem;
      font-weight: 500;
      color: var(--gray-900);
    }
  }
`
