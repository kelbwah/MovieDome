import React from "react";
import Card from "./Card.js";
import useMovieData from "./API.js";
import {useEffect, useState} from "react";

export default function(){
    
    const movieData = useMovieData("Spongebob");

    return (
        <p>{movieData}</p>
    )
}