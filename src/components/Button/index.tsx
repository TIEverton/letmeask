import { ButtonHTMLAttributes } from 'react';

import * as Styled from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return (
    <Styled.Container {...props} />
  )
}