import React from "react";

export default function(props){

    const releaseDate = props.releaseDate.substring(0, 4)
    const handleSearch = () => {
        const searchQuery = props.title.replace(/ /g, '+');
        const googleSearchURL = `https://www.fmovies.to/filter?keyword=${searchQuery}`;
        window.open(googleSearchURL, "_blank");
    }

    return (
        <div className="card">
            <div className="card-inner">
                <div className="front-content">
                    <img className="card-image" src={props.image}/>
                    <p className="releaseDate">{releaseDate}</p>
                </div>
                <div className="back-content">
                    <div className="back-content-flex">
                        <img className="back-card-image" src={props.image}/>
                        <div className="back-content-text">
                            <u className="underline"><h3 className="card-title">{props.title}</h3></u>
                            <h1 className="overview">{props.overview}</h1>
                        </div>
                    </div>
                    <button onClick={handleSearch} className="route-button grow">Watch Now</button>
               </div>
            </div>
        </div>
    )
}