import express from "express";
import router from "./router.js";

const app = express();

app.use(express.json());
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello Caramback!');
});

export default app;