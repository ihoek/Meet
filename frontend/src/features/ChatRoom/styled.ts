import styled from "styled-components";

const ChatRoomContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;

  .chat-header {
    padding: 20px;
    border-bottom: 1px solid #e1e5e9;
    background: #f8f9fa;
    
    h2 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 600;
      color: #333;
    }
    
    .room-info {
      margin-top: 5px;
      font-size: 0.9rem;
      color: #666;
    }
  }

  .chat-messages {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background: #f8f9fa;
    
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

  .chat-input {
    padding: 20px;
    border-top: 1px solid #e1e5e9;
    background: white;
    
    .input-container {
      display: flex;
      gap: 10px;
      align-items: center;
      
      input {
        flex: 1;
        padding: 12px 16px;
        border: 2px solid #e1e5e9;
        border-radius: 25px;
        font-size: 14px;
        outline: none;
        transition: all 0.3s ease;
        
        &:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
      }
      
      button {
        padding: 12px 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 25px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-1px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }
        
        &:active {
          transform: translateY(0);
        }
      }
    }
  }

  /* 메시지 스타일 */
  .message {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    
    &.sent {
      align-items: flex-end;
      
      .message-content {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 18px 18px 4px 18px;
      }
    }
    
    &.received {
      align-items: flex-start;
      
      .message-content {
        background: white;
        color: #333;
        border-radius: 18px 18px 18px 4px;
        border: 1px solid #e1e5e9;
      }
    }
    
    .message-content {
      max-width: 70%;
      padding: 12px 16px;
      font-size: 14px;
      line-height: 1.4;
      word-wrap: break-word;
    }
    
    .message-time {
      font-size: 11px;
      color: #999;
      margin-top: 4px;
    }
  }
`;

export default ChatRoomContainer;
