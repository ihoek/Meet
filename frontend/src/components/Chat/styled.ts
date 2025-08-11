import styled from "styled-components";

const ChatContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #f8f9fa;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  .Container-left {
    width: 30%;
    background: white;
    border-right: 1px solid #e1e5e9;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    
    /* 스크롤바 스타일링 */
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: #a8a8a8;
    }
  }

  .Container-right {
    width: 70%;
    background: white;
    display: flex;
    flex-direction: column;
    
    /* 스크롤바 스타일링 */
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: #a8a8a8;
    }
  }

  /* 반응형 디자인 */
  @media (max-width: 768px) {
    flex-direction: column;
    
    .Container-left {
      width: 100%;
      height: 40%;
      border-right: none;
      border-bottom: 1px solid #e1e5e9;
    }
    
    .Container-right {
      width: 100%;
      height: 60%;
    }
  }

  @media (max-width: 480px) {
    .Container-left {
      height: 35%;
    }
    
    .Container-right {
      height: 65%;
    }
  }
`;

export default ChatContainer;
