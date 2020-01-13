import React, {Component} from "react";
import Footer from "components/HomeItems/Footer/Footer";
import MovieGrid from "components/HomeItems/MovieGrid/MovieGrid";
import Hero from "components/HomeItems/Hero/Hero";

class HomePage extends Component {
    render() {
        return (
            < div
        className = "AngLeeDashBoard" >
            < Hero / >
            < MovieGrid / >
            < Footer / >
            < /div>
    )
        ;
    }
}

export default HomePage;
