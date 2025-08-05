import ChatList from "../../features/ChatList";
import ChatRoom from "../../features/ChatRoom";

import ChatContainer from "./styled";

const Chat = () => {
  return (
    <ChatContainer>
      <div className="Container-left">
        <ChatRoom />
      </div>
      <div className="Container-right">
        <ChatList />
      </div>
    </ChatContainer>
  );
};

export default Chat;
