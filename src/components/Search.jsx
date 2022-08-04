import { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import FastSearchList from "./FastSearchList";
import { useGetCurrentUser } from "../hooks/useGetUserCurrent";
import { addInHistorySearch } from "../store/reducers/userSlice";

function Search() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  let isAuth = false;

  const currentUser = useGetCurrentUser();

  if (currentUser) {
    isAuth = currentUser.isAuth;
  }

  const [searchTitle, setSearchTitle] = useState("");

  const [open, setOpen] = useState(false);

  const changeSearchInput = (e) => {
    setSearchTitle(e.target.value);
    setOpen(true);
  };

  const debounceOnChange = useCallback(debounce(changeSearchInput, 500), []);

  const clickButtonSearch = () => {
    if (isAuth) {
      dispatch(
        addInHistorySearch({
          searchTitle: searchTitle,
          currentUser: currentUser.email,
        })
      );
    }
    setOpen(false);
    navigate({ pathname: "/search", search: `search=${searchTitle}` });
  };

  return (
    <>
      <InputGroup className="mt-3 mb-3">
        <Button
          onClick={clickButtonSearch}
          variant="outline-secondary"
          id="button-addon1"
        >
          Search
        </Button>
        <Form.Control
          onChange={debounceOnChange}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Type to search..."
        />
      </InputGroup>
      <FastSearchList searchTitle={searchTitle} open={open} setOpen={setOpen} />
    </>
  );
}

export default Search;
