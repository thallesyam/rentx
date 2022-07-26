import * as S from './style'

type Props = {
  frameBg: string
  carBg: string
}

export function FrameCar({ frameBg, carBg }: Props) {
  return (
    <S.Container>
      <img src={frameBg} alt="Frame bg" className="frame" />
      <img src={carBg} alt="Car bg" className="car" />
    </S.Container>
  )
}
