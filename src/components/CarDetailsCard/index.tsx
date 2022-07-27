import * as S from './style'

type Props = {
  icon: any
  info: string
}

export function CarDetailsCard({ icon, info }: Props) {
  return (
    <S.Container>
      <div className="car-icon">{icon}</div>

      <div className="car-info">
        <p>{info}</p>
      </div>
    </S.Container>
  )
}
