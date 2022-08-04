import React from "react";
import DetailsTeam from "../components/DetailsTeam";
import { useLocation } from "react-router-dom";
import { useGetMoreInfoQuery } from "../store/reducers/teamsApi";

const DetailsPage = () => {
  const location = useLocation();

  const teamID = Number(location.pathname.split("/")[2]);

  const { data } = useGetMoreInfoQuery(teamID);

  return data ? <DetailsTeam teamID={teamID} moreInfo={data} /> : null;
};

export default DetailsPage;
