import { Button } from '@components/button'
import * as S from './style'

type Props = {
  selectedTab: 'info' | 'change'
  handleChangeTab: (selected: 'info' | 'change') => void
}

const tabs = [
  { id: 1, name: 'Dados', tabName: 'info' },
  { id: 2, name: 'Trocar senha', tabName: 'change' },
]

export function Tabs({ selectedTab, handleChangeTab }: Props) {
  return (
    <S.Container>
      {tabs.map((tab) => (
        <Button
          onClick={() => handleChangeTab(tab.tabName as 'info' | 'change')}
          key={tab.id}
          className={tab.tabName === selectedTab ? 'isCurrent' : ''}
        >
          {tab.name}
        </Button>
      ))}
    </S.Container>
  )
}
