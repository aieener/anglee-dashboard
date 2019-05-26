import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "MovieName",
    dataIndex: "movieName",
    width: "20%"
  },
  {
    title: "Title",
    dataIndex: "title",
    width: "40%"
  },
  {
    title: "Date",
    dataIndex: "date",
    width: "20%"
  },
  {
    title: "Rate",
    dataIndex: "score",
    witdh: "20%"
  }
];
const IMDbTableView = props => {
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
