import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 1.75rem 1rem;

  background-color: var(--white-900);

  display: flex;
  justify-content: center;

  > section {
    width: 100%;
    max-width: 956px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > svg {
      cursor: pointer;
      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: opacity(0.8);
      }
    }
  }
`
