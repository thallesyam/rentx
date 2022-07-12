import { Button } from '@components/button'
import * as S from './style'

type Props = {
  selectedTab: string
  handleChangeTab: (selected: string) => void
  tabs: {
    id: number
    name: string
    tabName: string
  }[]
}

export function Tabs({ selectedTab, handleChangeTab, tabs }: Props) {
  return (
    <S.Container>
      {tabs.map((tab) => (
        <Button
          onClick={() => handleChangeTab(tab.tabName)}
          key={tab.id}
          className={tab.tabName === selectedTab ? 'isCurrent' : ''}
        >
          {tab.name}
        </Button>
      ))}
    </S.Container>
  )
}
