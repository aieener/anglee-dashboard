import React from "react";
import { Card, Icon, Tooltip } from "antd";
import styled from "styled-components";
const { Meta } = Card;

const CoverImg = styled.div`
  height: 200px;
  background-image: ${props => `url(${props.url})`};
  background-size: cover;
`;

const MovieCard = props => {
  const handleDelete = () => props.deleteMovie(props.movie);
  const handleCrawl = () => props.crawlTheInternet(props.movie);
  const handleCardOnClick = () => {
    if (props.cardOnClick) {
      props.cardOnClick(props.movie);
    } else {
      console.log("not clickable");
    }
  };

  const dateStr = props.movie.releaseDate.split("T")[0];

  let actions = {};
  if (props.isAdmin) {
    actions = [
      <Tooltip placement="bottom" title={"edit"}>
        <Icon type="edit" />
      </Tooltip>,
      <Tooltip placement="bottom" title={"crawl"}>
        <Icon type="rocket" onClick={handleCrawl} />
      </Tooltip>,
      <Tooltip placement="bottom" title={"delete"}>
        <Icon type="delete" onClick={handleDelete} />
      </Tooltip>
    ];
  }

  return (
    <Card
      hoverable
      onClick={handleCardOnClick}
      cover={<CoverImg url={props.movie.imageUrl} />}
      actions={actions}
      loading={props.loading}
      size="small"
    >
      <Meta title={props.movie.title} description={dateStr} />
    </Card>
  );
};

export default MovieCard;
