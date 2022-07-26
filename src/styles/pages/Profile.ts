import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 5rem);
  max-width: 1128px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;

  background-color: var(--gray-100);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`

export const UserContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  padding-top: 2.5rem;
  padding-right: 4.5rem;

  @media (max-width: 768px) {
    padding: 0;
  }

  &:before {
    content: '';
    width: 1px;
    height: 100%;
    max-height: 660px;
    background-color: var(--gray-300);
    position: absolute;
    right: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
`
