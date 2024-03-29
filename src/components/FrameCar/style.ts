import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  .frame {
    position: absolute;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .car {
    z-index: 1;

    @media (max-width: 768px) {
      display: none;
    }
  }
`
