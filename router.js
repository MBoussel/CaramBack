import express from "express";
import{
    createJoke,
    getAllJokes
} from "./controllers/jokeController.js"

const router =express.Router();

router.post("/api/blagues",createJoke);
router.get("/api/blagues",getAllJokes)

export default router