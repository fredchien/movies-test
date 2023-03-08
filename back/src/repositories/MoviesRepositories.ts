/**
 * @author [Frederic Chien]
 * @email [fred.chien@domatech.com.br]
 * @create date 08-03-2023 18:16:48
 * @modify date 08-03-2023 18:16:48
 * @desc [DTO para filmes]
 */
import { Movie } from "../model/Movie";

interface IMovieDTO {
    name: string;
    description: string; 
    category: string; 
    duration: number; 
    image?: string;
}

class MoviesRepositories{

    private movies: Movie[];

    constructor(){
        this.movies = [];
    }

    create({name, description, category, duration, image}: IMovieDTO): void{
        const addMovie = new Movie();
        Object.assign(addMovie, {
            name,
            description,
            category,
            duration,
            image,
            created_at: new Date()
        })    
        this.movies.push(addMovie);

    }

    get(){
        return this.movies;
    }
}

export {MoviesRepositories};