import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 5rem);
  max-width: 1128px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const UserContainer = styled.section`
  display: flex;
  justify-content: center;
  position: relative;

  padding-top: 2.5rem;

  &:before {
    content: '';
    width: 1px;
    height: 100%;
    max-height: 660px;
    background-color: var(--gray-300);
    position: absolute;
    right: 0;
  }
`

export const ScheduleContainer = styled.section`
  display: flex;
  justify-content: center;
`
