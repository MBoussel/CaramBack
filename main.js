import "dotenv/config"
import app from "./app.js"
import { sequelize } from "./models/jokeModel.js";

const port = process.env.APP_PORT; 

sequelize.sync().then(() => {
  console.log(" BDD synchronisée");

app.listen(port, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${port}`);
});
}).catch((err) => {
  console.error(" Erreur lors de la synchronisation de la BDD :", err);
});