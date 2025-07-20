import express from "express";
import{
    createJoke,
    readAllJokes,
    readJokeById
} from "./controllers/jokeController.js"

const router =express.Router();

router.post("/api/blagues",createJoke);
router.get("/api/blagues",readAllJokes)
router.get("/api/blagues/:id",readJokeById)

export default router