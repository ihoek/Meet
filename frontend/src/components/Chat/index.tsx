import ChatList from "../../features/ChatList";
import ChatRoom from "../../features/ChatRoom";

import ChatContainer from "./styled";

const Chat = () => {
  return (
    <ChatContainer>
      <div className="Container-left">
        <ChatList />
      </div>
      <div className="Container-right">
        <ChatRoom />
      </div>
    </ChatContainer>
  );
};

export default Chat;
