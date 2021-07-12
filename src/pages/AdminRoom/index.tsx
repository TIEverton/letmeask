import { useHistory, useParams } from 'react-router-dom'
import * as Styled from './styles';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg'
import answerImg from '../../assets/images/answer.svg'
import deleteImgModal from '../../assets/images/delete-modal.svg';
import emptyImg from '../../assets/images/empty-questions.svg';

import Button from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
// import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import Question from '../../components/Question';
import { useRoom } from '../../hooks/useRoom';
import toast from 'react-hot-toast';
import { useState } from 'react';

type RoomParams = {
  id: string
}

export default function AdminRoom() {
  // const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  const [modalOpenQuestion, setModalOpenQuestion] = useState(false);
  const [questionId, setQuestionId] = useState('');

  const [modalOpenCloseRoom, setModalOpenCloseRoom] = useState(false);

  function handleModalDelete(questionId: string) {
    setModalOpenQuestion(true)
    setQuestionId(questionId)
  }

  function handleDeleteCloseRoom() {
    setModalOpenCloseRoom(true)
  }

  async function handleDeleteQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    toast('Questão removida!',
      {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    setModalOpenQuestion(false)
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })
    toast('Sala encerrada!',
      {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    setModalOpenCloseRoom(false)
    history.push('/');
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })

    toast('Questão marcada como respondida!',
      {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    })

    toast('Questão destacada!',
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
    <>
      {modalOpenQuestion && (
        <Styled.Modal>
          <Styled.Overlay onClick={() => setModalOpenQuestion(false)}>

          </Styled.Overlay>
          <Styled.ModalStructure>
            <div className="modal-header">
              <img src={deleteImgModal} alt="deleteImgModal" />
              <h1>Excluir pergunta</h1>
              <span>Tem certeza que você deseja excluir está pergunta?</span>
            </div>
            <div className="buttons">
              <button className="button-cancel" onClick={() => setModalOpenQuestion(false)}>Cancelar</button>
              <button className="button-confirm" onClick={() => handleDeleteQuestion(questionId)}>Sim, excluir</button>
            </div>
          </Styled.ModalStructure>
        </Styled.Modal>
      )}
      {modalOpenCloseRoom && (
        <Styled.Modal>
          <Styled.Overlay onClick={() => setModalOpenCloseRoom(false)}>

          </Styled.Overlay>
          <Styled.ModalStructure>
            <div className="modal-header">
              <img src={deleteImgModal} alt="deleteImgModal" />
              <h1>Encerrar sala</h1>
              <span>Tem certeza que você deseja encerrar está sala?</span>
            </div>
            <div className="buttons">
              <button className="button-cancel" onClick={() => setModalOpenCloseRoom(false)}>Cancelar</button>
              <button className="button-confirm" onClick={() => handleEndRoom()}>Sim, encerrar</button>
            </div>
          </Styled.ModalStructure>
        </Styled.Modal>
      )}
      <Styled.Container>
        <Styled.Header>
          <div className="content">
            <img src={logoImg} alt="Letmeask" />
            <div>
              <RoomCode
                code={roomId}
              />
              <Button
                onClick={handleDeleteCloseRoom}
                isOutline={true}
              >Encerrar sala</Button>
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
            {questions.length <= 0 && (
              <Styled.EmptyQuestion>
                <img src={emptyImg} alt="Illustration" />
                <h2>Nenhuma pergunta por aqui...</h2>
                <span>Envie o código desta sala para seus amigos e comece a responder perguntas!</span>
              </Styled.EmptyQuestion>
            )}
            {questions.map((question) => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {!question.isAnswered && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleCheckQuestionAsAnswered(question.id)}
                      >
                        <img src={checkImg} alt="Marcar pergunta como respondida" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <img src={answerImg} alt="Dar destaque à pergunta" />
                      </button>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={() => handleModalDelete(question.id)}
                  >
                    <img src={deleteImg} alt="Remover pergunta" />
                  </button>
                </Question>
              )
            })}
          </div>
        </Styled.Main>
      </Styled.Container>
    </>
  )
}