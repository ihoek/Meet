import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  overflow: hidden;

  /* 배경 애니메이션 효과 */
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
    );
    animation: float 20s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 60%
    );
    animation: float 15s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }

  .main-content {
    position: relative;
    z-index: 10;
    text-align: center;
    color: white;
    max-width: 600px;
    padding: 40px;
  }

  .main-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;
  }

  .main-subtitle {
    font-size: 1.2rem;
    margin-bottom: 40px;
    opacity: 0.9;
    line-height: 1.6;
  }

  .main-features {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 40px;
    flex-wrap: wrap;
  }

  .feature-item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 20px;
    min-width: 150px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .feature-icon {
      font-size: 2rem;
      margin-bottom: 10px;
      display: block;
    }

    .feature-title {
      font-weight: 600;
      margin-bottom: 5px;
    }

    .feature-desc {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }

  .main-actions {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .action-button {
    padding: 15px 30px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    &.primary {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }

  /* 반응형 디자인 */
  @media (max-width: 768px) {
    .main-title {
      font-size: 2.5rem;
    }

    .main-subtitle {
      font-size: 1rem;
    }

    .main-features {
      gap: 20px;
    }

    .feature-item {
      min-width: 120px;
      padding: 15px;
    }

    .main-actions {
      flex-direction: column;
      align-items: center;
    }

    .action-button {
      width: 200px;
    }
  }

  @media (max-width: 480px) {
    .main-title {
      font-size: 2rem;
    }

    .main-content {
      padding: 20px;
    }

    .feature-item {
      min-width: 100px;
      padding: 12px;
    }
  }
`;

export default MainContainer;
