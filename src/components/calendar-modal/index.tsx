import { Modal } from '@components/modal'

import { Button } from '@components/button'

import CloseSvg from '../../../public/icons/close.svg'

import * as S from './style'

type Props = {
  onClick?: () => void
  isOpen: boolean
}

export function CalendarModal({ onClick, isOpen }: Props) {
  return (
    <Modal isOpen={isOpen} className="modal_calendar">
      <S.Container>
        <header>
          <p>Escolha uma data de início e fim do aluguel</p>

          <Button onClick={onClick}>
            <CloseSvg />
          </Button>
        </header>

        <section>
          <div className="calendar">thalles</div>

          <div className="input">iuan</div>
        </section>
      </S.Container>
    </Modal>
  )
}
