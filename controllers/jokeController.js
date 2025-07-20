import {Joke} from "../models/jokeModel.js"

// Ajouter une blague 
export const createJoke = async (req, res) => {
    try {
        const {question, reponse} = req.body;
        const joke = await Joke.create({question, reponse});
        res.status(201).json(joke);
    }catch(err){
        res.status(400).json({err: "Erreur lors de l'ajout de la blague"})
    }
};
export const readAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const readJokeById = async (req, res) => {
  const { id } = req.params;
  try {
    const JokeById = await Joke.findByPk(id);
        if (!JokeById) {
      return res.status(404).json({ message: "Blague non trouvée" });
    }
    res.status(200).json(JokeById);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};