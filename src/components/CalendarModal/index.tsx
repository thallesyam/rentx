import { Dispatch, SetStateAction } from 'react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Modal } from '@components/Modal'
import { Button } from '@components/Button'
import { Calendar } from '@components/Calendar'

import CloseSvg from '../../../public/icons/close.svg'

import * as S from './style'

type Props = {
  onClick?: () => void
  toggle?: () => void
  isOpen: boolean
  date: Date
  setDate: Dispatch<SetStateAction<Date>>
  handleChangeTab: (selected: string) => void
}

export function CalendarModal({
  onClick,
  isOpen,
  date,
  setDate,
  toggle,
  handleChangeTab,
}: Props) {
  const fromFormated = format(date[0] ?? new Date(), "dd 'de' MMMM'", {
    locale: ptBR,
  })

  const toFormated = format(date[1] ?? new Date(), "dd 'de' MMMM'", {
    locale: ptBR,
  })

  function handleSelectedDate() {
    toggle()
    handleChangeTab('time')
  }

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
          <Calendar date={date} setDate={setDate} />

          <form onSubmit={handleSelectedDate}>
            <div className="input_container">
              <div>
                <label htmlFor="from">De</label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  readOnly
                  value={fromFormated}
                />
              </div>

              <div>
                <label htmlFor="to">Até</label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  readOnly
                  value={toFormated}
                />
              </div>
            </div>

            <Button
              disabled={date[0] === undefined || date[1] === undefined}
              type="submit"
            >
              Confirmar
            </Button>
          </form>
        </section>
      </S.Container>
    </Modal>
  )
}
