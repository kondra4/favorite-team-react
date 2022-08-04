import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites } from "../utils/fetchFavorites";
import CardItem from "../components/CardItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useGetCurrentUser } from "../hooks/useGetUserCurrent";

const FavoritesPage = () => {
  const dispatch = useDispatch();

  const currentUser = useGetCurrentUser();

  const favorites = currentUser.favoritesTeams;

  useEffect(() => {
    fetchFavorites(favorites, dispatch);
  }, []);

  const data = useSelector((state) => state.fetchFavorites.dataFavorites);

  const dataTransforming = data.map((obj) => obj.team);

  return dataTransforming.length !== 0 ? (
    <Row xs={1} md={4} className="g-4">
      {dataTransforming.map((team) => (
        <Col key={team.id}>
          <CardItem teamInfo={team} />
        </Col>
      ))}
    </Row>
  ) : (
    <h1 className="text-center">you didn't add anything favorites</h1>
  );
};

export default FavoritesPage;
