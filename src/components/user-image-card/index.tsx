import CamSvg from '../../../public/icons/cam.svg'
import EmptyImageSvg from '../../../public/icons/empty-image.svg'

import * as S from './styles'

type Props = {
  url: string
  handleChangeImage: (image: File) => void
}

export function UserImageCard({ url, handleChangeImage }: Props) {
  return (
    <S.Container>
      {url !== '' ? (
        <img src={url} alt="Imagem do usuário" />
      ) : (
        <div>
          <EmptyImageSvg />
        </div>
      )}

      <label htmlFor="image">
        <CamSvg />
      </label>

      <input
        name="image"
        id="image"
        type="file"
        onChange={(event) => handleChangeImage(event.target.files[0])}
      />
    </S.Container>
  )
}
