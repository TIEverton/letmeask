import * as Styled from './styles'

import { Link } from 'react-router-dom';
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg';

import Button from '../../components/Button';

export function NewRoom() {

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
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui.</Link>
          </p>
        </div>
      </Styled.Main>
    </Styled.Container>
  )
}