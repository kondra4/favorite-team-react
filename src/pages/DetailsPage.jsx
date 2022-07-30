import React from "react";
import DetailsTeam from "../components/DetailsTeam";
import { useLocation } from "react-router-dom";
import { useGetMoreInfoQuery } from "../store/reducers/teamsApi";

const DetailsPage = () => {
  const location = useLocation();

  const teamID = location.state;

  const { data } = useGetMoreInfoQuery(teamID);

  return <div>{data ? <DetailsTeam arrRes={data} /> : null}</div>;
};

export default DetailsPage;
