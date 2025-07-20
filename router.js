import express from "express";
import{
    createJoke,
    readAllJokes,
    readJokeById,
    readRandomJoke
} from "./controllers/jokeController.js"

const router =express.Router();

router.post("/api/blagues",createJoke);
router.get("/api/blagues",readAllJokes)
router.get("/api/blagues/random",readRandomJoke)
router.get("/api/blagues/:id",readJokeById)

export default router