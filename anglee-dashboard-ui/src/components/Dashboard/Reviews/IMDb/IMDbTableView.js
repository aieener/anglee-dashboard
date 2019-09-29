import React from "react";
import { Table, Button, Tag } from "antd";
import { Link } from "react-router-dom";

const IMDbTableView = props => {
  const columns = [
    {
      title: "UserName",
      dataIndex: "user",
      key: "user",
      width: "10%"
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
      width: "10%"
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "spoiler",
      width: "10%",
      render: spoiler => {
        if (spoiler) {
          return <Tag color={"volcano"}>Spolier</Tag>;
        }
      }
    },
    {
      title: "Content",
      key: "content",
      witdh: "20%",
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
