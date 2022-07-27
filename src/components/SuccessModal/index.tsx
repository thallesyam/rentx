import { Modal } from '@components/Modal'
import { Button } from '@components/Button'

import SymbolModalSvg from '../../../public/icons/symbol-modal.svg'
import SuccessModalSvg from '../../../public/icons/success-modal.svg'

import * as S from './style'

type Props = {
  title: string
  content: string
  type?: 'register' | 'update' | ''
  onClick?: () => void
  isOpen: boolean
}

export function SuccessModal({
  title,
  content,
  type = '',
  onClick,
  isOpen,
}: Props) {
  return (
    <Modal isOpen={isOpen} className="modal_success">
      <S.Container>
        <SymbolModalSvg />
        <SuccessModalSvg />

        <p>{title}</p>
        <span>{content}</span>

        {type && (
          <span>
            {type === 'register' ? 'Seja bem-vindo(a).' : 'foram atualizadas.'}
          </span>
        )}

        <Button onClick={onClick}>Ok</Button>
      </S.Container>
    </Modal>
  )
}
