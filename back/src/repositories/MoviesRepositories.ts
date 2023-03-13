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
            },
            {
                name: "The Last of Us",
                description: "Vinte anos após a destruição da civilização moderna, Joel, um sobrevivente, é contratado para contrabandear Ellie, uma garota de 14 anos, para fora de uma zona opressiva de quarentena. O que começa como um pequeno trabalho logo se torna uma jornada brutal e de partir o coração, já que ambos devem atravessar os EUA e dependem um do outro para sobreviver.", 
                category: "Drama", 
                duration: 522, 
                image: "https://media.fstatic.com/eJhyZ2uLmhbq42AfvwM7hE3MM1w=/210x312/smart/filters:format(webp)/media/movies/covers/2022/12/the-last-of-us.jpg",
                created_at: new Date()
            },
            {
                name: "Triângulo da Tristeza",
                description: "Um casal de modelos são convidados para um cruzeiro de luxo.", 
                category: "Comédia", 
                duration: 150, 
                image: "https://media.fstatic.com/d2bmgdKFgbufNDL7n31NwcUer8c=/210x312/smart/filters:format(webp)/media/movies/covers/2022/08/triangle_of_sadness_ver2.jpg",
                created_at: new Date()
            },
            {
                name: "Uma Cidade Sem Lei",
                description: "Em um mundo sem armas, um andarilho misterioso, um jovem samurai e um barman planejam uma vingança contra um líder cruel e seu exército de assassinos. O filme é visualmente deslumbrante, preenchido com sequências de ação coreografadas que mistura tendências e influências.", 
                category: "Ação", 
                duration: 124, 
                image: "https://media.fstatic.com/91Wbph4sME8484Te3Ld5OpZVtEI=/210x312/smart/filters:format(webp)/media/movies/covers/2011/09/a2f86ae9c1446c59797fc443b489a513.jpg",
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