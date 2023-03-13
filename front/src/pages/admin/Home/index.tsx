/**
 * @author [Frederic Chien]
 * @email [contato@kyuubi.com.br]
 * @create date 13-03-2023 12:07:27
 * @modify date 13-03-2023 12:07:27
 * @desc [description]
 */
 import React, { useEffect, useState } from "react";
 import api from "../../../config/api";

 //interface
 import {Imovie} from '../../../Interface/IMovie';

 //components
 import CardMovie from '../../../components/Card';
 import Header from '../../../components/Header';
 import Paginations from '../../../components/Pagination';

 function Home(){
    const [movies, setMovies] = useState<Imovie[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [moviesFilter, setMoviesFilter] = useState<Imovie[]>([]);
    const [actualPage, setActualPage] = useState<number>(1);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        try {
          await api.get(`/movies`).then((res) => {
            setMovies(res.data);
            setTotalPages(res.data.length);
            setMoviesFilter(res.data.slice((actualPage - 1) * 3, actualPage * 3));
        });
          
        } catch (error) {
          console.log("Get Movies " + error);
        }
    };

    function paginate(valor:any){
        setActualPage(valor);
        setMoviesFilter(movies.slice((valor - 1) * 3, valor * 3));
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-5 d-flex justify-content-between flex-wrap">
                        {
                            moviesFilter.map((movie, index) => (
                                <CardMovie movie={movie} key={index}/>
                                )
                            )
                        }
                    </div>
                    <div className="col-lg-12">
                        <Paginations total={totalPages} active={actualPage} paginate={paginate}/>
                    </div>
                </div>
            </div>
        </>
    );
 }

 export default Home;