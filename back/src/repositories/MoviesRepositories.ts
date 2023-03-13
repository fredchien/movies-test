/**
 * @author [Frederic Chien]
 * @email [contato@kyuubi.com.br]
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
        this.movies = [
            {
                name: "A Baleia",
                description: "Isolado do restante do mundo, um homem com mais de 200 quilos (Brendan Fraser) tenta se reconectar com sua filha distante enquanto lentamente se alimenta até a morte.", 
                category: "Drama", 
                duration: 117, 
                image: "https://media.fstatic.com/JPESaTkekusoASWUhSkLebtcNz4=/210x312/smart/filters:format(webp)/media/movies/covers/2023/01/d6efa9c9-5f51-410c-b3fa-5e1c198a1b6c.jpg",
                created_at: new Date()
            },
            {
                name: "Pânico 6",
                description: "Sam, Tara, Chad e Mindy, os quatro sobreviventes do recente massacre do Ghostface decidem deixar Woodsboro para trás em busca de um recomeço em uma nova cidade. Mas não demora muito para eles se tornarem alvo de um novo serial killer mascarado.", 
                category: "Terror", 
                duration: 123, 
                image: "https://media.fstatic.com/1Lwgk63shc_E034w1PPSrVUqfm4=/210x312/smart/filters:format(webp)/media/movies/covers/2022/12/cats_PMOp9oF.jpg",
                created_at: new Date()
            },
            {
                name: "Pantera Negra: Wakanda Para Sempre",
                description: "Os líderes do reino de Wakanda lutam para proteger a sua nação das forças invasoras, após a morte do Rei T'Challa.", 
                category: "Ação", 
                duration: 161, 
                image: "https://media.fstatic.com/iPjjA_8tfdayFslcvTIWgFPAb1E=/210x312/smart/filters:format(webp)/media/movies/covers/2022/10/cats_MQrsAwg.jpg",
                created_at: new Date()
            }
    ];
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

    get(): Movie[]{
        return this.movies;
    }
}

export {MoviesRepositories};