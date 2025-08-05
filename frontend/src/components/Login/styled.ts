import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .login-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100px;
    gap: 10px;
  }

  .login-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 10px;
  }

  .login-content-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10px;
  }
`;

export default LoginContainer;
