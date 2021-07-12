import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;

  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      max-height: 45px;
    }

    > div {
      display: flex;
      gap: 16px;

      button {
        height: 40px;
      }
    }
  }
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;

  .room-title {
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      color: #29292e;
    }

    span {
      margin-left: 16px;
      background-color: #e559f9;
      border-radius: 9999px;
      padding: 8px 16px;
      color: #FFF;
      font-weight: 500;
      font-size: 14px;
    }
  }

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background-color: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
    }

    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;

      .user-info {
        display: flex;
        align-items: center;

        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        span {
          margin-left: 8px;
          color: #29292e;
          font-weight: 500;
          font-size: 14px;
        }
      }

      > span {
        font-size: 14px;
        color: #737380;
        font-weight: 500;

        button {
          background: transparent;
          border: 0;
          color: #835afb;
          cursor: pointer;
          text-decoration: underline;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }

  .question-list {
    margin-top: 32px;
    padding-bottom: 10px;
  }
`;

export const Modal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);

  cursor: pointer;
`;

export const ModalStructure = styled.div`
  background: #F0F0F5;
  color: #29292E;
  height: 50%;
  max-height: 300px;

  width: 100%;
  max-width: 590px;

  border-radius: 8px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 35px;
  z-index: 1;
  .modal-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    span {
      color: #737380;
    }
  }

  .buttons {
    display: flex;
    gap: 8px;

    button {
      padding: 15px 40px;
      border-radius: 8px;
    }

    .button-cancel {
      background-color: #DBDCDD;
      color: #737380;
    }

    .button-confirm {
      background-color: #E73F5D;
      color: #FFFFFF;
    }
  }
`;