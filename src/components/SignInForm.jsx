import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { AuthContext } from "../context/AuthContext";

function SignInForm() {
  const { setIsAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const checkEmailAndPassword = (event) => {
    event.preventDefault();
    if (
      valueEmail === JSON.parse(localStorage.getItem("Email")) &&
      valuePassword === JSON.parse(localStorage.getItem("Password"))
    ) {
      setIsAuth(true);
      navigate("/", { replace: true });
    } else {
      alert("Error: Invalid password or Email");
    }
  };

  return (
    <Form onSubmit={checkEmailAndPassword}>
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
        Sign In
      </Button>
    </Form>
  );
}

export default SignInForm;
