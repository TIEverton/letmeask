
import { useHistory } from 'react-router-dom';

import * as Styled from './styles'
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import Button from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../../services/firebase';

export function Home() {
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();

  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.')
      return;
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <Styled.Container>
      <Styled.Aside>
        <img src={illustrationImg} alt="Letmeask" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </Styled.Aside>
      <Styled.Main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">
            ou entre em uma sala
          </div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </Styled.Main>
    </Styled.Container>
  )
}