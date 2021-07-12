import * as Styled from './styles';

import emptyImg from '../../assets/images/empty-questions.svg';

export function EmptyQuestion() {
  return (
    <Styled.Container>
      <img src={emptyImg} alt="Illustration" />
      <h2>Nenhuma pergunta por aqui...</h2>
      <span>Envie o código desta sala para seus amigos e comece a responder perguntas!</span>
    </Styled.Container>
  )
}