import React from "react";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";

const IMDbTableView = props => {
  const columns = [
    {
      title: "MovieName",
      dataIndex: "movieName",
      key: "movieName",
      width: "30%"
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "30%"
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "20%"
    },
    {
      title: "Rate",
      dataIndex: "score",
      key: "score",
      witdh: "10%"
    },
    {
      title: "Content",
      key: "content",
      witdh: "10%",
      render: review => (
        <Button type="primary" onClick={() => props.handleReadDetail(review)}>
          <Link to={`${review.movieName}/{movie._id}`}> See Detail </Link>
        </Button>
      )
    }
  ];
  return (
    <Table
      columns={columns}
      rowKey={review => review._id}
      loading={props.loading}
      dataSource={props.reviews}
    />
  );
};

export default IMDbTableView;
