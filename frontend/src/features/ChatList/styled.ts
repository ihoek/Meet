import styled from "styled-components";

const ChatListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;

  .chat-list-header {
    padding: 20px;
    border-bottom: 1px solid #e1e5e9;
    background: #f8f9fa;

    h2 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 600;
      color: #333;
    }

    .search-container {
      margin-top: 15px;
      position: relative;

      input {
        width: 100%;
        padding: 10px 16px 10px 40px;
        border: 2px solid #e1e5e9;
        border-radius: 20px;
        font-size: 14px;
        outline: none;
        transition: all 0.3s ease;

        &:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        &::placeholder {
          color: #a0a0a0;
        }
      }

      .search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #a0a0a0;
        font-size: 16px;
      }
    }
  }

  .chat-list-content {
    flex: 1;
    overflow-y: auto;

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

  /* 채팅방 아이템 스타일 */
  .chat-item {
    padding: 15px 20px;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
      background: #f8f9fa;
    }

    &.active {
      background: #e3f2fd;
      border-left: 4px solid #667eea;
    }

    .chat-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 18px;
      flex-shrink: 0;
    }

    .chat-info {
      flex: 1;
      min-width: 0;

      .chat-name {
        font-weight: 600;
        font-size: 14px;
        color: #333;
        margin-bottom: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .chat-last-message {
        font-size: 13px;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .chat-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4px;
      flex-shrink: 0;

      .chat-time {
        font-size: 11px;
        color: #999;
      }

      .chat-unread {
        background: #667eea;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 600;
      }
    }
  }

  /* 빈 상태 스타일 */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #999;
    text-align: center;
    padding: 40px 20px;

    .empty-icon {
      font-size: 48px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 16px;
      margin-bottom: 8px;
    }

    .empty-subtext {
      font-size: 14px;
      opacity: 0.7;
    }
  }
`;

export default ChatListContainer;
