import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Aside = styled.aside`
  flex: 7;

  background: #835afd;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 7.5rem 5rem;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 2.25rem 'Poppins', sans-serif;
    line-height: 2.625rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1rem;
    color: #f8f8f8;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Main = styled.main`
  flex: 8;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: #FFF;
        border: 1px solid #a8a8b3;
      }

      button {
        margin-top: 16px;
      }

      button, input {
        width: 100%;
      }
    }

    p {
      font-size: 14px;
      color: #737380;
      margin-top: 16px;

      a {
        color: #e559f9;
      }
    }
  }

`;