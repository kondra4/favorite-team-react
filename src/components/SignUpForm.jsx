import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addNewUser } from "../store/reducers/userSlice";

export function SignUpForm() {
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const dispatch = useDispatch();

  const saveEmailAndPassword = (event) => {
    event.preventDefault();
    if (valueEmail === "") {
      alert("Error: empty email");
    } else if (valuePassword === "") {
      alert("Error: empty password");
    } else {
      const newUser = {
        email: valueEmail,
        password: valuePassword,
        isAuth: false,
        favoritesTeams: [],
        searchParams: [],
      };
      dispatch(addNewUser(newUser));
    }
  };

  return (
    <Form onSubmit={saveEmailAndPassword}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => {
            setValueEmail(e.target.value);
          }}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => {
            setValuePassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}
