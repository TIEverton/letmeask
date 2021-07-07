import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom'
import * as Styled from './styles';

import logoImg from '../../assets/images/logo.svg';
import Button from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import Question from '../../components/Question';
import { useRoom } from '../../hooks/useRoom';

type RoomParams = {
  id: string
}

export default function AdminRoom() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);
  const [newQuestion, setNewQuestion] = useState('');


  async function handleSendQuestions(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return
    }

    if (!user) {
      alert('Toast')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar
      },
      isHighlighted: false,
      isAnswered: false
    }

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion('')
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode
              code={roomId}
            />
            <Button isOutline={true}>Encerrar sala</Button>
          </div>
        </div>
      </Styled.Header>
      <Styled.Main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>{questions.length} pergunta(s)</span>
          )}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            )
          })}
        </div>
      </Styled.Main>
    </Styled.Container>
  )
}