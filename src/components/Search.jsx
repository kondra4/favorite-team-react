import { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInHistorySearch } from "../store/reducers/historySllice";

function Search() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  const navigate = useNavigate();

  const [searchTitle, setSearchTitle] = useState("");

  const changeSearchInput = (e) => {
    setSearchTitle(e.target.value);
  };
  const debounceOnChange = useCallback(debounce(changeSearchInput, 1000), []);

  const clickButtonSearch = () => {
    if (isAuth) {
      dispatch(addInHistorySearch(searchTitle));
    }
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
        />
      </InputGroup>
    </>
  );
}

export default Search;
