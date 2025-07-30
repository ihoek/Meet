import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());

// MySQL 연결
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

async function testDBConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL 연결 성공");
  } catch (error) {
    console.error("❌ MySQL 연결 실패:", error);
  }
}
testDBConnection();

// Socket.IO 연결
io.on("connection", (socket) => {
  console.log("🔌 사용자 연결:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ 사용자 종료:", socket.id);
  });

  // signaling, 채팅 이벤트 등 구현 예정
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});
