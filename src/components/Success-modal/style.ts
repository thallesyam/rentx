import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > svg:nth-child(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  > p {
    font-size: 2.25rem;
    font-weight: 600;
    font-family: 'Archivo';
    color: var(--white-900);
    margin: 3rem 0 1rem;
  }

  > span {
    font-size: 1.125rem;
    color: var(--gray-400);

    text-align: center;
    display: block;
  }

  > button {
    width: 100%;
    max-width: 120px;
    height: 64px;
    margin-top: 2.5rem;
    background-color: var(--gray-900);
    color: var(--white-900);
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;

    transition: filter 0.2s ease-in;

    &:hover {
      filter: opacity(0.9);
    }
  }
`
