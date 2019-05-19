import React from "react";
import { Card, Icon} from "antd";
const { Meta } = Card;

const MovieCard = props => {
  const handleDelete = () => {
    const movieId = props.movie._id;
    props.deleteMovie(movieId);
  }
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img src={props.movie.imageUrl} alt={props.movie.title} />}
      actions={[
        <Icon type="edit" />,
        <Icon type="delete" onClick={handleDelete} />
      ]}
      loading={props.loading}
      size="small"
    >
      <Meta title={props.movie.title} description={props.movie.description} />
    </Card>
  );
};

export default MovieCard;
