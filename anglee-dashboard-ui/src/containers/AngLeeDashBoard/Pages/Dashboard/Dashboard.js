import React, {Component} from "react";
import {Route} from "react-router-dom";
import DashboardLayout from "components/Dashboard/DashboardLayout";
import {Layout, Breadcrumb} from "antd";
import MovieCardsContainer from "./Review/IMDB/MovieCardsContainer";
import MovieReviewContainer from "./Review/IMDB/MovieReviewContainer";

const {Content} = Layout;

class Dashboard extends Component {
    state = {
        collapsed: true,
        selectedKeys: ["statistics"]
    };

    updateMenuKey = newKey => {
        this.setState({selectedKeys: newKey});
    };

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {
        const defaultContent = (
            < div >
            < Breadcrumb
        style = {
        {
            margin: "16px 0"
        }
    }>
    <
        Breadcrumb.Item > Dashboard < /Breadcrumb.Item>
        < /Breadcrumb>
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
        Renee
        is
        an
        egg
        < /div>
        < /div>
    )
        ;

        const rootUrl = "/dashboard";
        const content = (
            < Content
        style = {
        {
            margin: "0 16px"
        }
    }>
    <
        Route
        path = {rootUrl}
        exact
        render = {()
    =>
        defaultContent
    }
        />
        < Route
        path = {`/dashboard/imdbReview`
    }
        exact
        render = {routeProps
    =>
        (
        < MovieCardsContainer
        handleCardOnClick = {this.handleCardOnClick}
        selectedMovie = {this.state.selectedMovie}
        {...
            routeProps
        }
        />
    )
    }
        />
        < Route
        path = {`/dashboard/imdbReview/:movieName`
    }
        component = {MovieReviewContainer}
        />
        < /Content>
    )
        ;

        return (
            < DashboardLayout
        collapsed = {this.state.collapsed}
        onCollapse = {this.onCollapse}
        content = {content}
        selectedKeys = {this.state.selectedKeys}
        rootUrl = {rootUrl}
        updateMenuKey = {this.updateMenuKey}
        />
    )
        ;
    }
}

export default Dashboard;
