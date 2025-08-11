import { useState } from "react";
import ChatListContainer from "./styled";

const ChatList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChat, setSelectedChat] = useState(1);
  
  const [chatRooms, setChatRooms] = useState([
    {
      id: 1,
      name: "프로젝트 팀",
      lastMessage: "회의 시간을 조율해보겠습니다.",
      time: "오후 2:30",
      unreadCount: 3,
      avatar: "PT"
    },
    {
      id: 2,
      name: "친구들",
      lastMessage: "주말에 만나서 놀까요?",
      time: "오후 1:45",
      unreadCount: 0,
      avatar: "친"
    },
    {
      id: 3,
      name: "가족",
      lastMessage: "저녁 메뉴 뭐 먹을까요?",
      time: "오전 11:20",
      unreadCount: 1,
      avatar: "가"
    },
    {
      id: 4,
      name: "동호회",
      lastMessage: "다음 모임 일정 공지드립니다.",
      time: "어제",
      unreadCount: 5,
      avatar: "동"
    },
    {
      id: 5,
      name: "스터디 그룹",
      lastMessage: "오늘 학습 내용 정리해주세요.",
      time: "어제",
      unreadCount: 0,
      avatar: "스"
    }
  ]);

  const filteredChats = chatRooms.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChatSelect = (chatId: number) => {
    setSelectedChat(chatId);
    // 여기에 채팅방 선택 로직 추가
    console.log(`채팅방 ${chatId} 선택됨`);
  };

  return (
    <ChatListContainer>
      {/* 헤더 */}
      <div className="chat-list-header">
        <h2>채팅</h2>
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="채팅방 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* 채팅방 목록 */}
      <div className="chat-list-content">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${selectedChat === chat.id ? "active" : ""}`}
              onClick={() => handleChatSelect(chat.id)}
            >
              <div className="chat-avatar">{chat.avatar}</div>
              <div className="chat-info">
                <div className="chat-name">{chat.name}</div>
                <div className="chat-last-message">{chat.lastMessage}</div>
              </div>
              <div className="chat-meta">
                <div className="chat-time">{chat.time}</div>
                {chat.unreadCount > 0 && (
                  <div className="chat-unread">{chat.unreadCount}</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">💬</div>
            <div className="empty-text">검색 결과가 없습니다</div>
            <div className="empty-subtext">다른 검색어를 입력해보세요</div>
          </div>
        )}
      </div>
    </ChatListContainer>
  );
};

export default ChatList;
