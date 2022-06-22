import styled from 'styled-components'

export const Container = styled.main`
  > button {
    display: block;
    background-color: transparent;
    text-align: left;
    margin: 1.5rem 0;
    font-size: 1rem;
    color: var(--gray-500);
    transition: filter 0.2s ease-in;

    &:hover {
      filter: opacity(0.8);
    }
  }
`
