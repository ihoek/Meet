import { useState } from "react";
import ChatRoomContainer from "./styled";

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "안녕하세요! 반갑습니다.",
      sender: "received",
      time: "오후 2:30",
    },
    {
      id: 2,
      text: "안녕하세요! 저도 반갑습니다.",
      sender: "sent",
      time: "오후 2:31",
    },
    {
      id: 3,
      text: "오늘 날씨가 정말 좋네요.",
      sender: "received",
      time: "오후 2:32",
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "sent",
        time: new Date().toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <ChatRoomContainer>
      {/* 채팅방 헤더 */}
      <div className="chat-header">
        <h2>채팅방</h2>
        <div className="room-info">3명의 참여자</div>
      </div>

      {/* 메시지 영역 */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="message-content">{msg.text}</div>
            <div className="message-time">{msg.time}</div>
          </div>
        ))}
      </div>

      {/* 입력 영역 */}
      <div className="chat-input">
        <div className="input-container">
          <input
            type="text"
            placeholder="메시지를 입력하세요..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSendMessage}>전송</button>
        </div>
      </div>
    </ChatRoomContainer>
  );
};

export default ChatRoom;
