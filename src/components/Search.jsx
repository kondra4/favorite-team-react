import {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { LinkContainer } from 'react-router-bootstrap';
import {SearchContext} from "../context/SearchContext";


function Search() {


    const {setSearchTitle} = useContext(SearchContext);


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
                    onChange={(e) => {
                        setSearchTitle(e.target.value)
                    }}
                />
            </InputGroup>
        </>
    );
}

export default Search;