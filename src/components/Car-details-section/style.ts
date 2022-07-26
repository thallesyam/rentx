import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  > section {
    > p {
      margin-top: 1.5rem;
      font-size: 1rem;
      color: var(--gray-800);
      line-height: 26px;
      margin-bottom: 7.063rem;
    }

    .rent_button {
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
`

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 0.5rem;
  padding-top: 2.5rem;

  margin-bottom: 3rem;
`
