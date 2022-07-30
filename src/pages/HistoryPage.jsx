import React from "react";
import HistoryItem from "../components/HistoryItem";
import { useSelector } from "react-redux";

const HistoryPage = () => {
  const searchQueries = useSelector(
    (state) => state.historySearch.searchParams
  );

  return (
    <div>
      <HistoryItem props={searchQueries} />
    </div>
  );
};

export default HistoryPage;
