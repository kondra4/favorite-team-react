import React from "react";
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

export default FavoriteButton;
