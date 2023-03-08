import { Router, Request, Response } from 'express';
import { MoviesRepositories } from '../repositories/MoviesRepositories';

const moviesRoutes = Router();
const moviesRepositories = new MoviesRepositories();


moviesRoutes.post("/", (req: Request, res: Response) => {
    const { name, description, category, duration, image} = req.body;

    moviesRepositories.create({name, description, category, duration, image})

    return res.status(201).send();
});

moviesRoutes.get("/", (req: Request, res: Response) => {
    const movies = moviesRepositories.get();
    return res.send(movies);

});

export {moviesRoutes};