import React from "react";
import Card from "./Card.js";
import useMovieData from "./API.js";
import {useEffect, useState} from "react";

export default function(){
    
    const movieData = useMovieData("Spongebob");
    const [searchQuery, setSearchQuery] = useState(""); 



    return (
        <div className="body">
            <div className="search-bar">
                <form>
                    <input className="input-bar grow" type="text" placeholder="Search for a movie"/>
                    <button className="input-submit dim" type="submit">Search</button>
                </form>
            </div>
            <div className="result-cards">

            </div>
        </div>
        // <p>{movieData}</p>
    )
}