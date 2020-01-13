import React, {Component} from "react";
import IMDbTableView from "components/Dashboard/Reviews/IMDb/IMDbTableView";
import ReviewDescription from "components/Dashboard/Reviews/IMDb/IMDbReviewDetail";
import axios from "@/axios/axios-core";
import {Link} from "react-router-dom";
import {Breadcrumb} from "antd";
import IMDbTopStats from "components/Dashboard/Reviews/IMDb/IMDbTopStats";

export default class MovieReviewContainer extends Component {
    state = {
        reviews: [],
        loading: true,
        movieName: "",
        currentReview: null
    };

    componentDidMount() {
        this.getIMDbReviews();
    }

    handleReadDetail = review => {
        this.setState({currentReview: review});
    };

    handleResetCurrentView = () => {
        this.setState({currentReview: null});
    };

    getIMDbReviews = () => {
        const movieName = this.props.match.params.movieName;
        return axios.get(`/reviews/imdb/${movieName}`).then(res => {
            const reviews = res.data.reviews;
            this.setState({reviews: reviews, loading: false, movieName: movieName});
        });
    };

    render() {
        const {movieName, reviews, loading, currentReview} = this.state;

        let mainBody = (
            < div
        style = {
        {
            padding: 24, background
        :
            "#fff", minHeight
        :
            360
        }
    }>
    <
        IMDbTableView
        reviews = {reviews}
        loading = {loading}
        handleReadDetail = {this.handleReadDetail}
        {...
            this.props
        }
        />
        < /div>
    )
        ;

        let inReviewBreadCrumb = null;
        if (currentReview) {
            const review = currentReview;
            inReviewBreadCrumb =
        <
            Breadcrumb.Item > {review.title} < /Breadcrumb.Item>;
            mainBody =
        <
            ReviewDescription
            review = {review}
            />;
        }

        const breadCrumb = (
            < Breadcrumb
        style = {
        {
            margin: "16px 0 "
        }
    }>
    <
        Breadcrumb.Item
        onClick = {this.handleResetCurrentView} >
            < Link
        to = {`/dashboard/imdbReview`
    }>
        IMDb
        Reviews < /Link>
        < /Breadcrumb.Item>
        < Breadcrumb.Item
        onClick = {this.handleResetCurrentView} >
            < Link
        to = {`/dashboard/imdbReview/${movieName}`
    }
    >
        {
            `${movieName}`
        }
    <
        /Link>
        < /Breadcrumb.Item>
        {
            inReviewBreadCrumb
        }
    <
        /Breadcrumb>
    )
        ;

        return (
            < div >
            {breadCrumb}
            < IMDbTopStats / >
            {mainBody}
            < /div>
    )
        ;
    }
}
