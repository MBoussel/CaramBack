import express from "express";
import{
    createJoke,
    readAllJokes,
    readJokeById,
    readRandomJoke
} from "./controllers/jokeController.js"

const router =express.Router();
/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Ajouter une nouvelle blague
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - reponse
 *             properties:
 *               question:
 *                 type: string
 *                 example: "Quelle est la femelle du hamster ?"
 *               reponse:
 *                 type: string
 *                 example: "L’Amsterdam"
 *     responses:
 *       201:
 *         description: Blague créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       400:
 *         description: Données invalides
 */
router.post("/api/blagues",createJoke);
/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupère toutes les blagues
 *     responses:
 *       200:
 *         description: Liste des blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 */
router.get("/api/blagues", readAllJokes);
/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Aucune blague trouvée
 */
router.get("/api/blagues/random",readRandomJoke)
/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Récupère une blague par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: Détails de la blague
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Blague non trouvée
 */
router.get("/api/blagues/:id",readJokeById)

export default router