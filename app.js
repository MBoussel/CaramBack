import express from "express";
import router from "./router.js";
import cors from "cors"
import { swaggerUi, swaggerSpec } from './swagger.js';


const app = express();
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello Caramback!');
});

export default app;