import { addDataFavorite } from "../store/reducers/fetchFavSlice";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
    "X-RapidAPI-Host": "v3.football.api-sports.io",
  },
};

export const fetchFavorites = (ids, dispatch) => {
  ids.map((id) => {
    fetch(`https://v3.football.api-sports.io/teams?id=${id}`, options)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addDataFavorite(response.response));
      });
  });
};
