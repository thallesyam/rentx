import styled from 'styled-components'

type Props = {
  bgColor: string
}

export const Container = styled.main<Props>`
  width: 100%;
  display: grid;
  grid-template-columns: 5rem 1fr;

  > section {
    background-color: ${(props) => props.bgColor};
  }
`
