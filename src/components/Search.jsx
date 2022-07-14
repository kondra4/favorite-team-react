import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search() {
    return (
        <>
            <InputGroup className="mt-3 mb-3">
                <Button variant="outline-secondary" id="button-addon1">
                    Search
                </Button>
                <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </>
    );
}

export default Search;