import { useNavigate } from "react-router-dom";
import MainContainer from "./styled";

const Main = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  const handleLearnMore = () => {
    // 여기에 더 알아보기 로직 추가
    console.log("더 알아보기 클릭");
  };

  return (
    <MainContainer>
      <div className="main-content">
        <h1 className="main-title">MEET</h1>
        <p className="main-subtitle">
          새로운 방식의 실시간 채팅 플랫폼으로
          <br />더 나은 소통을 경험해보세요
        </p>

        <div className="main-features">
          <div className="feature-item">
            <span className="feature-icon">💬</span>
            <div className="feature-title">실시간 채팅</div>
            <div className="feature-desc">즉시 메시지 전송</div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🔒</span>
            <div className="feature-title">보안</div>
            <div className="feature-desc">안전한 대화</div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📱</span>
            <div className="feature-title">반응형</div>
            <div className="feature-desc">모든 기기 지원</div>
          </div>
        </div>

        <div className="main-actions">
          <button className="action-button primary" onClick={handleGetStarted}>
            시작하기
          </button>
          <button className="action-button" onClick={handleLearnMore}>
            더 알아보기
          </button>
        </div>
      </div>
    </MainContainer>
  );
};

export default Main;
