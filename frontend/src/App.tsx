import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 라우터 등록
import Login from "./components/Login";
import Chat from "./components/Chat";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
