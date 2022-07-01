import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 2rem;
  position: relative;

  > button {
    background-color: transparent;
    font-size: 1.25rem;
    font-family: 'Archivo';
    font-weight: 300;
    color: var(--gray-700);
    padding-bottom: 1rem;
  }

  > button.isCurrent {
    color: var(--gray-600);
    position: relative;
    font-weight: 600;

    :before {
      content: '';
      width: 100%;
      height: 2px;
      background-color: var(--red-900);
      position: absolute;
      bottom: 0;
    }
  }

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--gray-300);
    position: absolute;
    bottom: 0;
  }
`
