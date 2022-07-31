import React from "react";
import CardGroup from "../components/CardGroup";
import { useSearchTeamQuery } from "../store/reducers/teamsApi";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [search] = useSearchParams();

  const searchTitle = search.get("search");

  const { data } = useSearchTeamQuery(searchTitle);

  return <div>{data ? <CardGroup arrRes={data} /> : null}</div>;
};

export default SearchPage;
