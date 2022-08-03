import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites } from "../utils/fetchFavorites";
import CardItem from "../components/CardItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const FavoritesPage = () => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.favoritesTeams);

  useEffect(() => {
    fetchFavorites(favorites, dispatch);
  }, []);

  const data = useSelector((state) => state.fetchFavorites.dataFavorites);

  const dataTransforming = data.map((obj) => obj.team);

  return dataTransforming ? (
    <Row xs={1} md={4} className="g-4">
      {dataTransforming.map((team) => (
        <Col key={team.id}>
          <CardItem teamInfo={team} />
        </Col>
      ))}
    </Row>
  ) : null;
};

export default FavoritesPage;
