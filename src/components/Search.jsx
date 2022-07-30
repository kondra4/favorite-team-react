import {useCallback, useContext} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {LinkContainer} from "react-router-bootstrap";
import {SearchContext} from "../context/SearchContext";
import debounce from "lodash.debounce";

function Search() {
    const {setSearchTitle} = useContext(SearchContext);

    const onChange = (e) => {
        setSearchTitle(e.target.value);
    };
    const debounceOnChange = useCallback(debounce(onChange, 1000), []);

    return (
        <>
            <InputGroup className="mt-3 mb-3">
                <LinkContainer to="/search">
                    <Button variant="outline-secondary" id="button-addon1">
                        Search
                    </Button>
                </LinkContainer>
                <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    onChange={debounceOnChange}
                />
            </InputGroup>
        </>
    );
}

export default Search;
