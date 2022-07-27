import { Dispatch, SetStateAction } from 'react'
import ReactCalendar from 'react-calendar'

type Props = {
  date: Date
  setDate: Dispatch<SetStateAction<Date>>
}

export function Calendar({ date, setDate }: Props) {
  return (
    <div className="calendar-container">
      <ReactCalendar
        onChange={setDate}
        value={date}
        selectRange={true}
        locale={'pt-br'}
      />
    </div>
  )
}
