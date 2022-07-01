import { Modal } from '@components/modal'

import { Button } from '@components/button'

import SymbolModalSvg from '../../../public/icons/symbol-modal.svg'
import SuccessModalSvg from '../../../public/icons/success-modal.svg'

import * as S from './style'

type Props = {
  title: string
  content: string
  type?: 'register' | 'update' | ''
  onClick?: () => void
}

export function SuccessModal({ title, content, type = '', onClick }: Props) {
  return (
    <Modal isOpen={true} className="modal_success">
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
