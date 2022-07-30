import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const HistoryItem = ({ props }) => {
  const searchQueries = props;

  const navigate = useNavigate();

  const clickSearchQuery = (query) => {
    navigate({ pathname: "/search", search: `search=${query}` });
  };

  return searchQueries.map((query, index) => (
    <div key={index} className="d-grid gap-2 pb-3">
      <Button
        onClick={() => clickSearchQuery(query)}
        variant="outline-primary"
        size="sm"
      >
        Search: {query}
      </Button>
    </div>
  ));
};

export default HistoryItem;
