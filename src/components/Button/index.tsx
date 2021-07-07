import { ButtonHTMLAttributes } from 'react';

import * as Styled from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutline?: boolean
};

export default function Button({ isOutline = false, ...props }: ButtonProps) {
  return (
    <Styled.Container isOutline={isOutline} {...props} />
  )
}