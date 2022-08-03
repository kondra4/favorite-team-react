import { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInHistorySearch } from "../store/reducers/historySllice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LinkContainer } from "react-router-bootstrap";
import CardItem from "./CardItem";
import { useSearchTeamQuery } from "../store/reducers/teamsApi";

function Search() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  const navigate = useNavigate();

  const [searchTitle, setSearchTitle] = useState("");

  const [open, setOpen] = useState(false);

  const changeSearchInput = (e) => {
    setSearchTitle(e.target.value);
    setOpen(true);
  };

  const debounceOnChange = useCallback(debounce(changeSearchInput, 300), []);

  const { data } = useSearchTeamQuery(searchTitle);

  const clickButtonSearch = () => {
    if (isAuth) {
      dispatch(addInHistorySearch(searchTitle));
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
      {searchTitle ? (
        open ? (
          data ? (
            <div className="shadow-lg p-3 mb-5 bg-light rounded ">
              <Row xs={1} md={4} className="g-4 p-4">
                {data.slice(",", 4).map((team) => (
                  <LinkContainer
                    key={team.id}
                    onClick={() => setOpen(false)}
                    to={`/details/${team.id}`}
                  >
                    <Col>
                      <CardItem teamInfo={team} />
                    </Col>
                  </LinkContainer>
                ))}
              </Row>
            </div>
          ) : null
        ) : null
      ) : null}
    </>
  );
}

export default Search;
