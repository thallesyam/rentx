import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 80px;
  padding: 1rem;

  background-color: var(--white-900);

  display: flex;
  justify-content: center;

  > section {
    width: 100%;
    max-width: 956px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--gray-900);
    }

    > svg {
      cursor: pointer;
      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: opacity(0.8);
      }
    }
  }
`
