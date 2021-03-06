import { ReactNode } from 'react';
import { Container } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode
  isAnswered?: boolean
  isHighlighted?: boolean
}

export default function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false
}: QuestionProps) {
  return (
    <Container isAnswered={isAnswered} isHighlighted={isHighlighted}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </Container>
  )
}