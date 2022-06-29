import { Button } from '@components/button'
import CamSvg from '../../../public/icons/cam.svg'
import EmptyImageSvg from '../../../public/icons/empty-image.svg'

import * as S from './styles'

export function UserImageCard({ url }) {
  return (
    <S.Container>
      {url !== '' ? (
        <img src={url} alt="Imagem do usuário" />
      ) : (
        <div>
          <EmptyImageSvg />
        </div>
      )}

      <Button>
        <CamSvg />
      </Button>
    </S.Container>
  )
}
