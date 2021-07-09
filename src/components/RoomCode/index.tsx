import * as Styled from './styles';

import copyImg from '../../assets/images/copy.svg';
import toast from 'react-hot-toast';

type RoomCodeProps = {
  code: string
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
    toast('Código da sala copiado!',
      {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
  }

  return (
    <Styled.Container onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </Styled.Container>
  )
}