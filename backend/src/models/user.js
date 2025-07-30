import { DataTypes } from "sequelize";
import { sequelize } from "../db.js"; // sequelize 인스턴스 export 필요

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  socketId: {
    type: DataTypes.STRING,
  },
  room: {
    type: DataTypes.STRING,
  },
});

export default User;
