import styled, { css } from 'styled-components';

type ButtonProps = {
  isOutline: boolean
}

export const Container = styled.button<ButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  ${props => props.isOutline === true ? css`
    border: 1px solid #835afd;
    background-color: transparent;
    color: #835afd;
  ` : css`
    background-color: #835afd;
    border: 0;
    color: #fff;
  `}
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: filter ease 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
