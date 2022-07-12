import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2px;
  align-items: center;

  > .car-icon,
  .car-info {
    padding: 1rem;
    background-color: var(--gray-100);

    display: flex;
    align-items: center;
  }

  .car-info {
    height: 100%;
    width: 100%;

    > p {
      font-size: 1.125rem;
      font-weight: 500;
      color: var(--gray-800);
    }
  }
`
