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