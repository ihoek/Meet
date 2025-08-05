import { useNavigate } from "react-router-dom";
import LoginContainer from "./styled";

const Login = () => {
  const navigate = useNavigate();

  // 로그인 버튼 클릭 이벤트
  const handleLogin = () => {
    console.log("로그인");
    // 로그인 성공 시 Chat 페이지로 이동
    navigate("/chat");
  };

  return (
    <LoginContainer>
      <div className="login-container">
        <div className="login-content-title">
          <h1>MEET</h1>
        </div>
        {/* 로그인 폼 */}
        <div className="login-content">
          <input type="text" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
          <button onClick={handleLogin}>로그인</button>
          <div className="login-content-link">
            <div>아이디 찾기</div>
            <div>비밀번호 찾기</div>
            <div>회원가입</div>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
