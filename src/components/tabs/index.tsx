import { Button } from '@components/button'
import * as S from './style'

type Props = {
  selectedTab: string
  handleChangeTab: (selected: string) => void
  toggle?: () => void
  isRentDate?: boolean
  tabs: {
    id: number
    name: string
    tabName: string
  }[]
}

export function Tabs({
  selectedTab,
  handleChangeTab,
  tabs,
  toggle,
  isRentDate,
}: Props) {
  const canOpenModalCalendar = selectedTab === 'about' && !isRentDate

  return (
    <S.Container>
      {tabs.map((tab) => (
        <Button
          onClick={() => {
            if (canOpenModalCalendar && tab.tabName === 'time') {
              toggle()
              return
            }

            handleChangeTab(tab.tabName)
          }}
          key={tab.id}
          className={tab.tabName === selectedTab ? 'isCurrent' : ''}
        >
          {tab.name}
        </Button>
      ))}
    </S.Container>
  )
}
