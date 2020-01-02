import React from "react";
import {Card, Statistic, Icon, Rate} from "antd";

const IMDbTopStats = props => {
    const {score} = props;
    return (
        < Card
    title = "Review Summary" >
        < Card.Grid >
        < Statistic
    title = "Active"
    value = {11.28}
    precision = {2}
    valueStyle = {
    {
        color: "#3f8600"
    }
}
    prefix = { < Icon
    type = "arrow-up" / >
}
    suffix = "%"
        / >
        < /Card.Grid>
        < Card.Grid >
        < Statistic
    title = "Idle"
    value = {9.3}
    precision = {2}
    valueStyle = {
    {
        color: "#cf1322"
    }
}
    prefix = { < Icon
    type = "arrow-down" / >
}
    suffix = "%"
        / >
        < /Card.Grid>
        < Card.Grid >
        < Statistic
    title = "Ave Rate"
    prefix = { < Rate
    allowHalf
    defaultValue = {3.5} > < /Rate>}
    value = {3.5}
    precision = {1}
    />
    < /Card.Grid>
    < /Card>
)
    ;
};

export default IMDbTopStats;
