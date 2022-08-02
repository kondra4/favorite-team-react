import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../store/reducers/favoritesSlice";

const FavoriteButton = ({ id }) => {
  const dispatch = useDispatch();

  const toogle = useSelector((state) =>
    state.favorites.favoritesTeams.includes(id)
  );

  const clickAddFavorite = () => {
    dispatch(addFavorites(id));
  };

  const clickRemoveFavorite = () => {
    dispatch(removeFavorites(id));
  };

  return (
    <div>
      {toogle ? (
        <Button onClick={clickRemoveFavorite} variant="success">
          Favorite
        </Button>
      ) : (
        <Button onClick={clickAddFavorite} variant="outline-success">
          + Add in favorites
        </Button>
      )}
    </div>
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.number,
};

export default FavoriteButton;
