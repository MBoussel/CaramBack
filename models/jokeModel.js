import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

const Joke = sequelize.define("Joke", {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reponse: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export { Joke, sequelize };