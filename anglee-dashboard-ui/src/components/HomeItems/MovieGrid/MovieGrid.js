import React from "react";
import lifeOfPiImage from "assets/img/moviePoster/life_of_pi.jpg";
import billyLynnImage from "assets/img/moviePoster/billylynn.jpg";
import seJieImage from "assets/img/moviePoster/sejie.jpeg";
import woodStockImage from "assets/img/moviePoster/woodstock.jpg";
import classes from "./MovieGrid.module.css";
import styled from "styled-components";

const GridLi = styled.li`
  background-image: ${props => `url(${props.url})`};
`;
const MovieGrid = () => {
    return (
        < div >
        < div
    className = {classes.HeadOfGrid} >
        < h1 > Welcome
    to
    Ang
    Lee
    Dashboard < /h1>
    < p >
    browse
    our
    top
    pick
    AngLee
    movies
    and
    see
    our
    statistical
    studies.
    < /p>
    < hr > < /hr>
    < /div>
    < ul >
    < div
    className = {classes.MovieGrid} >
        < GridLi
    className = {classes.Small}
    url = {seJieImage} > < /GridLi>
        < GridLi
    className = {classes.Large}
    url = {billyLynnImage} > < /GridLi>
        < /div>
        < div
    className = {classes.MovieGrid} >
        < GridLi
    className = {classes.Large}
    url = {lifeOfPiImage} > < /GridLi>
        < GridLi
    className = {classes.Small}
    url = {woodStockImage} > < /GridLi>
        < /div>
        < /ul>
        < /div>
)
    ;
};

export default MovieGrid;
