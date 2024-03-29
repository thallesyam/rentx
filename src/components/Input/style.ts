import styled from 'styled-components'

type Props = {
  isIcon: boolean
}

export const Container = styled.section<Props>`
  width: 100%;
  height: 64px;

  border: 1px solid var(--gray-200);

  display: grid;
  grid-template-columns: ${(props) => (props.isIcon ? '71px 1fr' : '1fr')};

  > div {
    position: relative;

    > input {
      width: 100%;
      height: 100%;
      padding-left: 1.5rem;
      border: 0;
      font-size: 1rem;
      color: var(--gray-700);

      &::placeholder {
        font-size: 1rem;
        color: var(--gray-700);
      }
    }

    > button {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);

      background-color: transparent;
      right: 1.5rem;
    }
  }
`
type ILabelIcon = {
  error: boolean
}

export const LabelIcon = styled.label<ILabelIcon>`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white-900);

  position: relative;

  > svg path {
    fill: ${(props) => (props.error ? 'var(--red-900)' : 'var(--gray-800)')};
  }

  &::after {
    content: '';
    background-color: var(--gray-100);
    position: absolute;
    right: 0;
    width: 2px;
    height: 90%;
  }
`
