import styled from 'styled-components'

export const Container = styled.main`
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--gray-100);

  > section {
    display: flex;
    align-items: center;
    gap: 5.375rem;

    width: 100%;
    max-width: 1120px;
  }
`
