import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFavorites} from "../utils/fetchFavorites";
import CardGroup from "../components/CardGroup";

const FavoritesPage = () => {
    const dispatch = useDispatch();

    const favorites = useSelector((state) => state.favorites.favoritesTeams);

    useEffect(() => {
        fetchFavorites(favorites, dispatch);
    }, []);

    const dataTeams = useSelector((state) => state.fetchFavorites.dataFavorites);

    return <div>{dataTeams ? <CardGroup arrRes={dataTeams}/> : null}</div>;
};

export default FavoritesPage;
