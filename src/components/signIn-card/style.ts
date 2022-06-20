import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;

  transition: filter 0.2s ease-in-out;

  > p {
    cursor: pointer;

    font-size: 1rem;
    font-weight: 600;
    color: var(--gray-900);
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    width: 3rem;
    height: 3rem;
    background-color: var(--gray-200);
    border-radius: 100%;
  }

  &:hover {
    filter: opacity(0.8);
  }
`
