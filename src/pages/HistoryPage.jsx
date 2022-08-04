import React from "react";
import HistoryItem from "../components/HistoryItem";
import { useGetCurrentUser } from "../hooks/useGetUserCurrent";

const HistoryPage = () => {
  const currentUser = useGetCurrentUser();

  const searchQueries = currentUser.searchParams;

  return (
    <div>
      {searchQueries.length !== 0 ? (
        <HistoryItem searchQueries={searchQueries} />
      ) : (
        <h1 className="text-center">You weren't looking for anything</h1>
      )}
    </div>
  );
};

export default HistoryPage;
