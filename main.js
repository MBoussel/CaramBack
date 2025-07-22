import "dotenv/config";
import app from "./app.js";
import { sequelize } from "./models/jokeModel.js";
import seedJokes from "./seed.js";

const port = process.env.PORT || process.env.APP_PORT || 3000;

sequelize.sync()
  .then(async () => {
    await seedJokes(); 
    app.listen(port, () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erreur lors de la synchronisation de la BDD :", err);
  });
