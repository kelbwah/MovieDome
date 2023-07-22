import React from "react";
import {useEffect, useState} from "react";

export default function(searchQuery){

    const [movieData, setMovieData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGZmY2E3NTJlNTcxNmE0YTE2YzJlOTJlYzQzNDA4NyIsInN1YiI6IjY0YWRkZGQ5YjY4NmI5MDBhZjlmYzRkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hX_1Tb_zXUFLMNuMY3aDbP10ZsUHJsF_yCcQk5sxcrU'
        }
    };
    
    useEffect(() => {
        
        const fetchData = async () => {
            try{
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`, options)
                const data = await response.json();
                setMovieData(data.results)
                console.log(data.results)
            } catch (error){
                console.error(error);
            } 
        }

        fetchData();

    },[searchQuery, options])

    return movieData
}