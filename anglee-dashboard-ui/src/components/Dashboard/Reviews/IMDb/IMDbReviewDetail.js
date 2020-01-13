import React from "react";
import { Descriptions, Typography, Card, Divider } from "antd";
const { Paragraph } = Typography;
const DescriptionsItem = Descriptions.Item;

const wordParser = raw => {
  let parts = raw.split("\n\n");
  return parts.map((part, idx) => {
    return <Paragraph key={idx}> {part}</Paragraph>;
  });
};

const IMDbReviewDetail = props => {
  const review = props.review;
  return (
    <div>
      <Descriptions bordered title={review.movieName} column={4}>
        <DescriptionsItem label="Title">{review.title}</DescriptionsItem>
        <DescriptionsItem label="Date">{review.date}</DescriptionsItem>
        <DescriptionsItem label="Score">{review.score}</DescriptionsItem>
      </Descriptions>
      <Divider orientation="left">Review Detail</Divider>
      <Card style={{ width: "100%" }}>{wordParser(review.body)}</Card>
    </div>
  );
};

export default IMDbReviewDetail;
