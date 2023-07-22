import React from "react";
import Card from "./Card.js";
import getMovieData from "./API.js";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' 
import { faGithub } from '@fortawesome/fontawesome-svg-core'


export default function(){
    
    
    const [searchQuery, setSearchQuery] = useState(""); 
    const [tempSearchQuery, setTempSearchQuery] = useState("");
    var baseImgUrl = 'https://image.tmdb.org/t/p/w500';
    var placeholderImage = "https://i.imgur.com/6GTLhe2.png"
    const movieData = getMovieData(searchQuery);
    const cards = movieData.map(data => (
        <Card 
            image = {data.poster_path !== null ? `${baseImgUrl}${data.poster_path}` : placeholderImage}
            title = {data.title}
            overview = {data.overview}
            releaseDate = {data.release_date}
        />
    ));


    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchQuery(prevQuery => tempSearchQuery);
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        setTempSearchQuery(event.target.value);
    }

    return (
        <div className="body">
            <div className="search-bar">
                <form onSubmit={handleSubmit}>
                    <input 
                        value={tempSearchQuery}
                        onChange = {handleInputChange}
                        className="input-bar" 
                        type="text" 
                        placeholder="Search for a movie"
                    />
                    <button className="input-submit" type="submit">
                        <div className="search">
                            <FontAwesomeIcon icon={ faMagnifyingGlass }/>
                        </div>
                    </button>
                </form>
            </div>
            <div className="result-cards">
                {cards}
            </div>
            <footer className="footer">
                <p className="footer-power">Powered by TMDB API</p>
                <p className="footer-power">created by kelbwah</p>
            </footer>
        </div>
        
    )
}