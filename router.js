import express from "express";
import{
    createJoke
} from "./controllers/jokeController.js"

const router =express.Router();

router.post("/api/blagues",createJoke);

export default router