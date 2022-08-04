import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUser } from "../hooks/useGetUserCurrent";
import { addFavorites, removeFavorites } from "../store/reducers/userSlice";

const FavoriteButton = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let toogle = false;
  let isAuth = false;

  const currentUser = useGetCurrentUser();

  if (currentUser) {
    isAuth = currentUser.isAuth;
    toogle = currentUser.favoritesTeams.includes(id);
  }

  const clickAddFavorite = () => {
    if (!isAuth) {
      navigate("/signin");
    } else {
      dispatch(
        addFavorites({
          id: id,
          currentUser: currentUser.email,
        })
      );
    }
  };

  const clickRemoveFavorite = () => {
    dispatch(
      removeFavorites({
        id: id,
        currentUser: currentUser.email,
      })
    );
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
