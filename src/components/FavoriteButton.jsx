import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../store/reducers/favoritesSlice";
import { useNavigate } from "react-router-dom";

const FavoriteButton = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.user.isAuth);

  const toogle = useSelector((state) =>
    state.favorites.favoritesTeams.includes(id)
  );

  const clickAddFavorite = () => {
    if (!isAuth) {
      navigate("/signin");
    } else {
      dispatch(addFavorites(id));
    }
  };

  const clickRemoveFavorite = () => {
    dispatch(removeFavorites(id));
  };

  return isAuth ? (
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
  ) : (
    <Button onClick={clickAddFavorite} variant="outline-success">
      + Add in favorites
    </Button>
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.number,
};

export default FavoriteButton;
