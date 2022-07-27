import styled from 'styled-components'

type Props = {
  bgColor: string
}

export const Container = styled.main<Props>`
  width: 100%;
  display: grid;
  grid-template-columns: 5rem 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  > section {
    background-color: ${(props) => props.bgColor};

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`
