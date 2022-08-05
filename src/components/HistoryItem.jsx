import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const HistoryItem = ({ searchQueries }) => {
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

HistoryItem.propTypes = {
  searchQueries: PropTypes.arrayOf(PropTypes.string),
};
