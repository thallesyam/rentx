import styled from 'styled-components'

export const Container = styled.div`
  width: 180px;
  height: 180px;
  position: relative;
  margin-bottom: 2.5rem;

  > img {
    width: 100%;
    border-radius: 100%;
  }

  > div {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      180deg,
      #9a9a9a 0%,
      rgba(186, 186, 186, 0) 100%
    );
  }

  > button {
    width: 2.5rem;
    height: 2.5rem;

    background-color: var(--red-900);
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    right: 0;

    transition: filter 0.2s ease-in;

    &:hover {
      filter: opacity(0.9);
    }
  }
`
