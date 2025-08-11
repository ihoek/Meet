import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  .login-container {
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    padding: 40px;
    width: 100%;
    max-width: 400px;
    text-align: center;
  }

  .login-content-title {
    margin-bottom: 30px;

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #333;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .login-content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    input {
      padding: 15px 20px;
      border: 2px solid #e1e5e9;
      border-radius: 10px;
      font-size: 16px;
      transition: all 0.3s ease;
      outline: none;

      &:focus {
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      }

      &::placeholder {
        color: #a0a0a0;
      }
    }

    button {
      padding: 15px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 10px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  .login-content-link {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #e1e5e9;

    div {
      color: #667eea;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #764ba2;
        text-decoration: underline;
      }
    }
  }
`;

export default LoginContainer;
