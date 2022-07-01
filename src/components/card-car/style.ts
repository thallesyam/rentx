import styled from 'styled-components'

export const Container = styled.a`
  border: 1px solid var(--gray-200);
  background-color: var(--white-900);
  cursor: pointer;

  width: 100%;
  min-height: 293px;
  min-width: 360px;
  max-width: 360px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  > img {
    width: 100%;
    max-width: 288px;
    object-fit: cover;
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

  transition: filter 0.2s ease-in;

  &:hover {
    filter: opacity(0.8);
  }
`
