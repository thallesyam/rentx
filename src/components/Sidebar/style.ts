import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  max-width: 5rem;
  height: 100vh;
  background-color: var(--black-800);
`
export const LogoContainer = styled.section`
  background-color: var(--red-900);

  transition: filter 0.2s ease-in;
  cursor: pointer;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: opacity(0.9);
  }
`
export const IconsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  height: calc(100% - 5rem);

  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 3.375rem;
  }

  .isActive {
    background-color: var(--black-900);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 3px;
      height: 100%;
      background-color: var(--red-900);
    }

    > svg path {
      fill: var(--white-900);
    }
  }
`
